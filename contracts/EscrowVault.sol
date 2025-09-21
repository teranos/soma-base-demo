// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title EscrowVault
/// @notice Custody contract that holds ERC20 balances for Soma inquiries.
contract EscrowVault {
    address public immutable manager;

    event Deposited(address indexed token, address indexed from, uint256 amount);
    event Sent(address indexed token, address indexed to, uint256 amount);
    event PoolIncreased(address indexed token, uint256 amount);

    modifier onlyManager() {
        require(msg.sender == manager, "manager");
        _;
    }

    constructor(address _manager) {
        require(_manager != address(0), "manager=0");
        manager = _manager;
    }

    /// @notice Pulls tokens from a sender into the vault.
    function deposit(IERC20 token, address from, uint256 amount) external onlyManager {
        require(amount > 0, "amount=0");
        bool ok = token.transferFrom(from, address(this), amount);
        require(ok, "transferFrom");
        emit Deposited(address(token), from, amount);
    }

    /// @notice Sends tokens from the vault to a recipient.
    function send(IERC20 token, address to, uint256 amount) external onlyManager {
        require(amount > 0, "amount=0");
        bool ok = token.transfer(to, amount);
        require(ok, "transfer");
        emit Sent(address(token), to, amount);
    }

    /// @notice Book-keeping helper to track penalty reallocations.
    function increasePool(address token, uint256 amount) external onlyManager {
        emit PoolIncreased(token, amount);
    }
}
