import { ethers } from "hardhat";
import process from "process";

async function main() {
  const amountArg = process.argv[2];
  if (!amountArg) {
    console.error("Usage: npx hardhat run scripts/wrap-weth.ts --network baseSepolia <amount>");
    process.exitCode = 1;
    return;
  }

  const amount = ethers.parseEther(amountArg);
  if (amount <= 0n) {
    throw new Error("amount must be positive");
  }

  const [signer] = await ethers.getSigners();
  if (!signer) {
    throw new Error("signer unavailable");
  }

  const IWETH9 = [
    "function deposit() payable",
    "function balanceOf(address) view returns (uint256)"
  ];

  const wethAddress = "0x4200000000000000000000000000000000000006";
  const weth = new ethers.Contract(wethAddress, IWETH9, signer);

  console.log(`Wrapping ${amountArg} ETH to WETH for ${signer.address}...`);
  const tx = await weth.deposit({ value: amount });
  console.log(`Submitted tx: ${tx.hash}`);
  await tx.wait();
  const balance = await weth.balanceOf(signer.address);
  console.log(`New WETH balance: ${ethers.formatEther(balance)} WETH`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
