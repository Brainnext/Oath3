const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, hre.ethers.provider);

  console.log("Deploying contracts with account:", wallet.address);

  const Lock = await hre.ethers.getContractFactory("Lock", wallet);
  const lock = await Lock.deploy();

  await lock.waitForDeployment();

  console.log("Lock contract deployed to:", await lock.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
