import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const registryAddress = process.env.EXISTING_REGISTRY;
  if (!registryAddress) {
    throw new Error("Set EXISTING_REGISTRY env variable");
  }

  const registry = await ethers.getContractAt("SomaRegistry", registryAddress);
  const feeData = await ethers.provider.getFeeData();
  const baseGasPrice = feeData.gasPrice ?? ethers.parseUnits("5", "gwei");
  const overrides = { gasPrice: baseGasPrice * 4n };

  const enforceTx = await registry.setAllowlistEnforcement(true, overrides);
  console.log(`setAllowlistEnforcement tx: ${enforceTx.hash}`);
  await enforceTx.wait();
  console.log("Allowlist enforcement enabled");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
