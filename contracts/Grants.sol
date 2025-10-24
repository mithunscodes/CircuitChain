// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Grant {
    address public owner;

    event GrantSent(address indexed to, uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    // Owner can send test grants (for demo)
    function sendGrant(address payable to) external payable {
        require(msg.sender == owner, "only owner");
        require(msg.value > 0, "send some ETH");
        to.transfer(msg.value);
        emit GrantSent(to, msg.value, block.timestamp);
    }

    // Helper to receive ETH directly
    receive() external payable { }
}