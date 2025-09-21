import { ethers } from "hardhat";

async function main() {
  const env = process.env.ADDRESSES;
  if (!env) {
    throw new Error("Set ADDRESSES env (comma-separated)");
  }
  const addresses = env.split(",").map((a) => a.trim()).filter(Boolean);
  for (const addr of addresses) {
    const code = await ethers.provider.getCode(addr);
    console.log(`${addr}: code length ${code.length}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
