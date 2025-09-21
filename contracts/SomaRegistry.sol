// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {SomaTreasury} from "./SomaTreasury.sol";

/// @title SomaRegistry
/// @notice Stores protocol parameters and manages token allowlisting.
contract SomaRegistry is Ownable {
    /// @notice Basis points required for each initiation (default 10%).
    uint16 public INIT_BPS = 1000;
    /// @notice Basis points refunded to researcher on rejection (default 90%).
    uint16 public REJECT_REFUND_BPS = 9000;
    /// @notice Basis points refunded to researcher when marked unworthy (default 80%).
    uint16 public UNWORTHY_REFUND_BPS = 8000;
    /// @notice Percent of penalties allocated to the treasury (rest returns to the pool).
    uint16 public PENALTY_TREASURY_PCT = 50;

    /// @notice Optional allowlist toggle: when true only allowed tokens may be used.
    bool public enforceAllowlist;

    /// @notice Treasury contract receiving protocol fees.
    SomaTreasury public immutable treasury;

    /// @notice Mapping of token address to allowlist flag.
    mapping(address => bool) public isTokenAllowed;

    event InitBpsUpdated(uint16 newValue);
    event RejectRefundBpsUpdated(uint16 newValue);
    event UnworthyRefundBpsUpdated(uint16 newValue);
    event PenaltyTreasuryPctUpdated(uint16 newValue);
    event AllowlistEnforcementSet(bool enabled);
    event TokenAllowlistUpdated(address indexed token, bool allowed);

    /// @param treasuryAddress Address of the SomaTreasury contract.
    /// @param ownerAddress Address of the registry owner (typically deployer).
    constructor(address treasuryAddress, address ownerAddress) Ownable(ownerAddress) {
        require(treasuryAddress != address(0), "treasury=0");
        require(ownerAddress != address(0), "owner=0");
        treasury = SomaTreasury(treasuryAddress);
    }

    /// @notice Sets the required initiation basis points.
    /// @param newValue New basis point value (1-10000 exclusive of 0, inclusive of 10000?).
    function setInitBps(uint16 newValue) external onlyOwner {
        require(newValue > 0 && newValue <= 10000, "init bps");
        INIT_BPS = newValue;
        emit InitBpsUpdated(newValue);
    }

    /// @notice Sets the rejection refund basis points.
    function setRejectRefundBps(uint16 newValue) external onlyOwner {
        require(newValue <= 10000, "reject bps");
        REJECT_REFUND_BPS = newValue;
        emit RejectRefundBpsUpdated(newValue);
    }

    /// @notice Sets the unworthy refund basis points.
    function setUnworthyRefundBps(uint16 newValue) external onlyOwner {
        require(newValue <= 10000, "unworthy bps");
        UNWORTHY_REFUND_BPS = newValue;
        emit UnworthyRefundBpsUpdated(newValue);
    }

    /// @notice Sets the percent of penalties that go to the treasury.
    function setPenaltyTreasuryPct(uint16 newValue) external onlyOwner {
        require(newValue <= 100, "pct>100");
        PENALTY_TREASURY_PCT = newValue;
        emit PenaltyTreasuryPctUpdated(newValue);
    }

    /// @notice Enables or disables token allowlist enforcement.
    function setAllowlistEnforcement(bool enabled) external onlyOwner {
        enforceAllowlist = enabled;
        emit AllowlistEnforcementSet(enabled);
    }

    /// @notice Sets the allowlist status for a token.
    function setTokenAllowed(address token, bool allowed) external onlyOwner {
        require(token != address(0), "token=0");
        isTokenAllowed[token] = allowed;
        emit TokenAllowlistUpdated(token, allowed);
    }
}
