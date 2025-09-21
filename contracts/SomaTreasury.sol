// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/// @title SomaTreasury
/// @notice Holds protocol-level penalties and can sweep balances to a payout address.
contract SomaTreasury is Ownable {
    /// @notice Address receiving swept balances.
    address public payout;

    /// @notice Emitted when ERC20 funds are swept to the payout address.
    event TreasurySweep(address indexed token, uint256 amount, address indexed to);

    /// @param _payout Initial payout address.
    constructor(address _payout) Ownable(msg.sender) {
        require(_payout != address(0), "payout=0");
        payout = _payout;
    }

    /// @notice Updates the payout address.
    /// @param _payout The new payout destination.
    function setPayout(address _payout) external onlyOwner {
        require(_payout != address(0), "payout=0");
        payout = _payout;
    }

    /// @notice Sweeps ERC20 tokens to the payout address.
    /// @param token ERC20 token to transfer.
    /// @param amount Amount of tokens to sweep.
    function sweepERC20(IERC20 token, uint256 amount) external onlyOwner {
        require(address(token) != address(0), "token=0");
        require(amount > 0, "amount=0");
        bool ok = token.transfer(payout, amount);
        require(ok, "transfer");
        emit TreasurySweep(address(token), amount, payout);
    }
}
