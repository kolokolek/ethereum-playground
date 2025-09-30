const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const Vault = await ethers.getContractFactory("SimpleVault");
  const vault = await Vault.deploy();
  await vault.deployed();

  console.log("SimpleVault deployed to:", vault.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
