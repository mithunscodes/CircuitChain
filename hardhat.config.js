require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const RPC = process.env.RPC_URL || "";
const SEPOLIA_CHAIN_ID = 11155111;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: RPC,
      chainId: SEPOLIA_CHAIN_ID,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  }
};