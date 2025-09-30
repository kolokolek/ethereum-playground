// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title SimpleVault - minimal ETH deposit/withdraw example
/// @notice Education/demo only — not production-grade.
contract SimpleVault {
    mapping(address => uint256) public balances;

    event Deposited(address indexed from, uint256 amount);
    event Withdrawn(address indexed to, uint256 amount);

    /// @notice Deposit ETH into your balance.
    function deposit() external payable {
        require(msg.value > 0, "No ETH sent");
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    /// @notice Withdraw ETH from your balance.
    /// @param amount Amount of wei to withdraw.
    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;

        (bool ok, ) = msg.sender.call{value: amount}("");
        require(ok, "Withdraw failed");
        emit Withdrawn(msg.sender, amount);
    }
}
