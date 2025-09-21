import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const [signer] = await ethers.getSigners();
  if (!signer) throw new Error("no signer");
  const address = await signer.getAddress();
  const pending = await ethers.provider.getTransactionCount(address, "pending");
  const latest = await ethers.provider.getTransactionCount(address, "latest");
  console.log(`Address: ${address}`);
  console.log(`Nonce latest: ${latest}`);
  console.log(`Nonce pending: ${pending}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
