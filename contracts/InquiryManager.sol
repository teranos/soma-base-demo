// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {SomaRegistry} from "./SomaRegistry.sol";
import {EscrowVault} from "./EscrowVault.sol";
import {SomaMath} from "./SomaMath.sol";

/// @title InquiryManager
/// @notice Coordinates Soma inquiries, initiation flows, and settlements.
contract InquiryManager is Ownable, ReentrancyGuard {
    struct Inquiry {
        address creator;
        IERC20 token;
        uint256 creatorDeposit;
        uint256 totalIncentive;
        bytes32 publicHint;
        bool completed;
        uint40 createdAt;
    }

    struct Initiation {
        address researcher;
        uint256 amount;
        bool accepted;
        bool worthy;
        bool resolved;
    }

    SomaRegistry public registry;
    EscrowVault public vault;
    uint256 public nextId = 1;

    mapping(uint256 => Inquiry) public inquiries;
    mapping(uint256 => Initiation[]) internal inquiryInitiations;

    uint16 private constant USER_CUT_BPS = 1000; // 10%

    event InquiryCreated(uint256 indexed id, address indexed creator, address indexed token, uint256 amount, bytes32 publicHint);
    event Initiated(uint256 indexed id, address indexed researcher, uint256 amount, uint256 required);
    event InitiationAccepted(uint256 indexed id, address indexed researcher, uint256 idx);
    event InitiationRejected(uint256 indexed id, address indexed researcher, uint256 idx, uint256 refund, uint256 toTreasury, uint256 toPool);
    event MarkedWorthy(uint256 indexed id, address indexed researcher, uint256 idx);
    event MarkedUnworthy(uint256 indexed id, address indexed researcher, uint256 idx, uint256 refund, uint256 toTreasury, uint256 toPool);
    event Completed(uint256 indexed id, uint256 userCut, uint256 researchPot, uint256 worthyCount);

    modifier onlyCreator(uint256 id) {
        require(inquiries[id].creator == msg.sender, "creator");
        _;
    }

    modifier whenNotCompleted(uint256 id) {
        require(!inquiries[id].completed, "done");
        _;
    }

    constructor(address owner_) Ownable(owner_) {
        require(owner_ != address(0), "owner=0");
    }

    /// @notice One-time wiring of the registry contract.
    function setRegistry(address registry_) external onlyOwner {
        require(address(registry) == address(0), "set");
        require(registry_ != address(0), "registry=0");
        registry = SomaRegistry(registry_);
    }

    /// @notice One-time wiring of the vault contract.
    function setVault(address vault_) external onlyOwner {
        require(address(vault) == address(0), "set");
        require(vault_ != address(0), "vault=0");
        vault = EscrowVault(vault_);
    }

    /// @notice Creates a new inquiry and locks the creator's stake.
    function createInquiry(IERC20 token, uint256 amount, bytes32 publicHint) external nonReentrant returns (uint256 id) {
        require(address(token) != address(0), "token=0");
        require(amount > 0, "amount=0");
        require(address(registry) != address(0) && address(vault) != address(0), "uninit");
        if (registry.enforceAllowlist()) {
            require(registry.isTokenAllowed(address(token)), "token?allowed");
        }

        id = nextId++;
        vault.deposit(token, msg.sender, amount);

        Inquiry storage inquiry = inquiries[id];
        inquiry.creator = msg.sender;
        inquiry.token = token;
        inquiry.creatorDeposit = amount;
        inquiry.totalIncentive = amount;
        inquiry.publicHint = publicHint;
        inquiry.createdAt = uint40(block.timestamp);

        emit InquiryCreated(id, msg.sender, address(token), amount, publicHint);
    }

    /// @notice Returns the required initiation amount for an inquiry.
    function requiredInitiationAmount(uint256 id) public view returns (uint256) {
        Inquiry storage inquiry = inquiries[id];
        require(inquiry.creator != address(0), "inquiry");
        require(address(registry) != address(0), "registry");
        return SomaMath.requiredInitiation(inquiry.totalIncentive, registry.INIT_BPS());
    }

    /// @notice Allows a researcher to initiate by locking additional funds.
    function initiate(uint256 id) external nonReentrant whenNotCompleted(id) {
        Inquiry storage inquiry = inquiries[id];
        require(inquiry.creator != address(0), "inquiry");
        uint256 requiredAmount = SomaMath.requiredInitiation(inquiry.totalIncentive, registry.INIT_BPS());
        require(requiredAmount > 0, "req=0");

        vault.deposit(inquiry.token, msg.sender, requiredAmount);

        inquiryInitiations[id].push(
            Initiation({
                researcher: msg.sender,
                amount: requiredAmount,
                accepted: false,
                worthy: false,
                resolved: false
            })
        );

        inquiry.totalIncentive += requiredAmount;
        uint256 nextRequired = SomaMath.requiredInitiation(inquiry.totalIncentive, registry.INIT_BPS());

        emit Initiated(id, msg.sender, requiredAmount, nextRequired);
    }

    /// @notice Marks an initiation as accepted.
    function acceptInitiation(uint256 id, uint256 idx) external onlyCreator(id) whenNotCompleted(id) {
        Initiation storage initRef = _getInitiation(id, idx);
        require(!initRef.resolved, "resolved");
        initRef.accepted = true;
        emit InitiationAccepted(id, initRef.researcher, idx);
    }

    /// @notice Rejects an initiation and applies penalties/refunds.
    function rejectInitiation(uint256 id, uint256 idx) external onlyCreator(id) whenNotCompleted(id) nonReentrant {
        Inquiry storage inquiry = inquiries[id];
        Initiation storage initRef = _getInitiation(id, idx);
        require(!initRef.accepted, "accepted");
        require(!initRef.resolved, "resolved");

        (uint256 refund, uint256 treasuryPart, uint256 poolPart) = _computePenalty(initRef.amount, registry.REJECT_REFUND_BPS());

        if (refund > 0) {
            vault.send(inquiry.token, initRef.researcher, refund);
        }
        if (treasuryPart > 0) {
            vault.send(inquiry.token, address(registry.treasury()), treasuryPart);
        }
        if (poolPart > 0) {
            vault.increasePool(address(inquiry.token), poolPart);
        }

        inquiry.totalIncentive = inquiry.totalIncentive - refund - treasuryPart;
        initRef.resolved = true;

        emit InitiationRejected(id, initRef.researcher, idx, refund, treasuryPart, poolPart);
    }

    /// @notice Flags an accepted initiation as worthy for future payouts.
    function markWorthy(uint256 id, uint256 idx) external onlyCreator(id) whenNotCompleted(id) {
        Initiation storage initRef = _getInitiation(id, idx);
        require(initRef.accepted, "accepted");
        require(!initRef.resolved, "resolved");
        initRef.worthy = true;
        emit MarkedWorthy(id, initRef.researcher, idx);
    }

    /// @notice Marks an accepted initiation as unworthy and applies refunds/penalties.
    function markUnworthyAndRefund(uint256 id, uint256 idx) external onlyCreator(id) whenNotCompleted(id) nonReentrant {
        Inquiry storage inquiry = inquiries[id];
        Initiation storage initRef = _getInitiation(id, idx);
        require(initRef.accepted, "accepted?");
        require(!initRef.resolved, "resolved");

        (uint256 refund, uint256 treasuryPart, uint256 poolPart) = _computePenalty(initRef.amount, registry.UNWORTHY_REFUND_BPS());

        if (refund > 0) {
            vault.send(inquiry.token, initRef.researcher, refund);
        }
        if (treasuryPart > 0) {
            vault.send(inquiry.token, address(registry.treasury()), treasuryPart);
        }
        if (poolPart > 0) {
            vault.increasePool(address(inquiry.token), poolPart);
        }

        inquiry.totalIncentive = inquiry.totalIncentive - refund - treasuryPart;
        initRef.resolved = true;
        initRef.worthy = false;

        emit MarkedUnworthy(id, initRef.researcher, idx, refund, treasuryPart, poolPart);
    }

    /// @notice Completes an inquiry and distributes payouts.
    function complete(uint256 id) external onlyCreator(id) whenNotCompleted(id) nonReentrant {
        Inquiry storage inquiry = inquiries[id];
        require(inquiry.creator != address(0), "inquiry");

        Initiation[] storage list = inquiryInitiations[id];
        uint256 worthyCount;
        for (uint256 i = 0; i < list.length; i++) {
            Initiation storage initRef = list[i];
            if (initRef.accepted && initRef.worthy) {
                require(!initRef.resolved, "worthy resolved");
                worthyCount++;
            } else if (initRef.accepted && !initRef.resolved) {
                revert("unresolved");
            }
        }
        require(worthyCount > 0, "no worthy");

        uint256 total = inquiry.totalIncentive;
        uint256 userCut = (total * USER_CUT_BPS) / 10_000;
        uint256 researchPot = total - userCut;

        uint256[] memory indices = new uint256[](worthyCount);
        uint256[] memory weights = new uint256[](worthyCount);
        uint256 sumWeights;
        uint256 cursor;
        for (uint256 i = 0; i < list.length; i++) {
            Initiation storage initRef = list[i];
            if (initRef.accepted && initRef.worthy && !initRef.resolved) {
                uint256 weight = SomaMath.inverseWeight(initRef.amount);
                indices[cursor] = i;
                weights[cursor] = weight;
                sumWeights += weight;
                cursor++;
            }
        }

        require(sumWeights > 0, "sum=0");

        uint256 paid;
        for (uint256 j = 0; j < indices.length; j++) {
            Initiation storage initRef = list[indices[j]];
            uint256 payout = (researchPot * weights[j]) / sumWeights;
            if (j == indices.length - 1 && researchPot > paid + payout) {
                payout = researchPot - paid;
            }
            if (payout > 0) {
                vault.send(inquiry.token, initRef.researcher, payout);
            }
            paid += payout;
            initRef.resolved = true;
        }

        if (userCut > 0) {
            vault.send(inquiry.token, inquiry.creator, userCut);
        }

        inquiry.completed = true;
        inquiry.totalIncentive = 0;

        emit Completed(id, userCut, researchPot, worthyCount);
    }

    /// @notice Returns the initiations for an inquiry.
    function getInitiations(uint256 id) external view returns (Initiation[] memory) {
        return inquiryInitiations[id];
    }

    /// @notice Returns the total incentive and the next required initiation amount.
    function currentTotals(uint256 id) external view returns (uint256 total, uint256 nextRequired) {
        Inquiry storage inquiry = inquiries[id];
        total = inquiry.totalIncentive;
        if (address(registry) != address(0)) {
            nextRequired = SomaMath.requiredInitiation(total, registry.INIT_BPS());
        }
    }

    function _getInitiation(uint256 id, uint256 idx) internal view returns (Initiation storage) {
        Initiation[] storage list = inquiryInitiations[id];
        require(idx < list.length, "idx");
        return list[idx];
    }

    function _computePenalty(uint256 amount, uint16 refundBps)
        internal
        view
        returns (uint256 refund, uint256 treasuryPart, uint256 poolPart)
    {
        require(address(registry) != address(0), "registry");
        refund = (amount * refundBps) / 10_000;
        if (refund > amount) {
            refund = amount;
        }
        uint256 penalty = amount - refund;
        treasuryPart = (penalty * registry.PENALTY_TREASURY_PCT()) / 100;
        if (treasuryPart > penalty) {
            treasuryPart = penalty;
        }
        poolPart = penalty - treasuryPart;
    }
}
