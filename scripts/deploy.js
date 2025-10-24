const hre = require("hardhat");

async function main() {
  const Grant = await hre.ethers.getContractFactory("Grant");
  const grant = await Grant.deploy();

  // Wait for deployment in a way that works with ethers v6 and v5:
  if (typeof grant.waitForDeployment === "function") {
    // ethers v6
    await grant.waitForDeployment();
  } else if (typeof grant.deployed === "function") {
    // ethers v5
    await grant.deployed();
  } else if (grant.deployTransaction) {
    // fallback: wait on the deployment transaction
    await grant.deployTransaction.wait();
  }

  // print the address (supports both possible property names)
  console.log("Grant deployed to:", grant.target ?? grant.address);
  console.log("Save this address and set GRANT_CONTRACT in your .env for makeTxs.js");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});