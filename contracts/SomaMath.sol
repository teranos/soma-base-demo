// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title SomaMath
/// @notice Pure math helpers for Inquiry incentive calculations.
library SomaMath {
    uint256 internal constant BPS_DIVISOR = 10_000;
    uint256 internal constant PRECISION = 1e18;

    /// @notice Computes the required initiation amount as a percentage of the total pool.
    /// @dev Integer division floors toward zero which is acceptable for deterministic compounding.
    /// @param total Current total incentive.
    /// @param initBps Basis points for initiation sizing.
    function requiredInitiation(uint256 total, uint16 initBps) internal pure returns (uint256) {
        if (total == 0) return 0;
        return (total * initBps) / BPS_DIVISOR;
    }

    /// @notice Returns the inverse weight for an amount (earlier/cheaper entries get higher weight).
    /// @param amount Amount committed by the researcher.
    function inverseWeight(uint256 amount) internal pure returns (uint256) {
        if (amount == 0) revert("amount=0");
        return PRECISION / amount;
    }
}
