import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)"
];

function format(big: bigint): string {
  return ethers.formatEther(big);
}

function toBigInt(value: unknown): bigint {
  if (typeof value === "bigint") {
    return value;
  }
  if (typeof value === "number") {
    return BigInt(value);
  }
  if (typeof value === "string") {
    return BigInt(value);
  }
  return 0n;
}

async function main() {
  const managerAddress = process.env.MANAGER_ADDRESS;
  const tokenAddress = process.env.TOKEN;

  if (!managerAddress) {
    throw new Error("MANAGER_ADDRESS env var required");
  }
  if (!tokenAddress) {
    throw new Error("TOKEN env var required");
  }

  const manager = await ethers.getContractAt("InquiryManager", managerAddress);
  const registryAddress: string = await manager.registry();
  const vaultAddress: string = await manager.vault();
  const registryContract = await ethers.getContractAt("SomaRegistry", registryAddress);
  const treasuryAddress: string = await registryContract.treasury();

  console.log(`Registry: ${registryAddress}`);
  console.log(`Vault: ${vaultAddress}`);
  console.log(`Treasury: ${treasuryAddress}`);

  const token = new ethers.Contract(tokenAddress, ERC20_ABI, ethers.provider);

  const signers = await ethers.getSigners();
  if (signers.length < 4) {
    throw new Error("Need at least 4 signers (creator + 3 researchers)");
  }

  const [creator, researcherA, researcherB, researcherC] = signers;

  const initialDeposit = ethers.parseEther("100");
  const hint = ethers.encodeBytes32String("HINT");

  console.log("Approving allowances...");
  await (await token.connect(creator).approve(managerAddress, ethers.parseEther("1000"))).wait();
  await (await token.connect(researcherA).approve(managerAddress, ethers.parseEther("1000"))).wait();
  await (await token.connect(researcherB).approve(managerAddress, ethers.parseEther("1000"))).wait();
  await (await token.connect(researcherC).approve(managerAddress, ethers.parseEther("1000"))).wait();

  console.log("Creating inquiry...");
  const createTx = await manager.connect(creator).createInquiry(tokenAddress, initialDeposit, hint);
  const createRcpt = await createTx.wait();
  const created = createRcpt.logs
    .map((log) => {
      try {
        return manager.interface.parseLog(log);
      } catch (err) {
        return null;
      }
    })
    .find((parsed) => parsed && parsed.name === "InquiryCreated");

  if (!created) {
    throw new Error("Failed to parse InquiryCreated event");
  }

  const inquiryId = created.args?.id as bigint;
  console.log(`Inquiry ${inquiryId} created. Total incentive: ${format(initialDeposit)}`);

  async function logTotals(label: string) {
    const [total, nextRequired] = await manager.currentTotals(inquiryId);
    console.log(`${label} | total=${format(toBigInt(total))} nextRequired=${format(toBigInt(nextRequired))}`);
  }

  await logTotals("Post-create");

  console.log("Researcher A initiating...");
  const initATx = await manager.connect(researcherA).initiate(inquiryId);
  await initATx.wait();
  await logTotals("After A initiate");

  console.log("Researcher B initiating...");
  const initBTx = await manager.connect(researcherB).initiate(inquiryId);
  await initBTx.wait();
  await logTotals("After B initiate");

  console.log("Researcher C initiating...");
  const initCTx = await manager.connect(researcherC).initiate(inquiryId);
  await initCTx.wait();
  await logTotals("After C initiate");

  console.log("Accepting initiations 0 and 2...");
  await (await manager.connect(creator).acceptInitiation(inquiryId, 0)).wait();
  await (await manager.connect(creator).acceptInitiation(inquiryId, 2)).wait();

  console.log("Rejecting initiation 1 (penalizes researcher B)...");
  const rejectRcpt = await (await manager.connect(creator).rejectInitiation(inquiryId, 1)).wait();
  const rejectEvent = rejectRcpt.logs
    .map((log) => {
      try {
        return manager.interface.parseLog(log);
      } catch (err) {
        return null;
      }
    })
    .find((parsed) => parsed && parsed.name === "InitiationRejected");
  if (rejectEvent) {
    console.log(
      `Rejected idx ${rejectEvent.args?.idx}: refund=${format(toBigInt(rejectEvent.args?.refund))} treasury=${format(
        toBigInt(rejectEvent.args?.toTreasury)
      )} pool=${format(toBigInt(rejectEvent.args?.toPool))}`
    );
  }

  console.log("Marking initiation 0 worthy and initiation 2 unworthy...");
  await (await manager.connect(creator).markWorthy(inquiryId, 0)).wait();
  const unworthyRcpt = await (await manager.connect(creator).markUnworthyAndRefund(inquiryId, 2)).wait();
  const unworthyEvent = unworthyRcpt.logs
    .map((log) => {
      try {
        return manager.interface.parseLog(log);
      } catch (err) {
        return null;
      }
    })
    .find((parsed) => parsed && parsed.name === "MarkedUnworthy");
  if (unworthyEvent) {
    console.log(
      `Unworthy idx ${unworthyEvent.args?.idx}: refund=${format(toBigInt(unworthyEvent.args?.refund))} treasury=${format(
        toBigInt(unworthyEvent.args?.toTreasury)
      )} pool=${format(toBigInt(unworthyEvent.args?.toPool))}`
    );
  }

  await logTotals("Pre-complete");

  console.log("Completing inquiry...");
  const completeRcpt = await (await manager.connect(creator).complete(inquiryId)).wait();
  const completedEvent = completeRcpt.logs
    .map((log) => {
      try {
        return manager.interface.parseLog(log);
      } catch (err) {
        return null;
      }
    })
    .find((parsed) => parsed && parsed.name === "Completed");
  if (completedEvent) {
    console.log(
      `Completed: userCut=${format(toBigInt(completedEvent.args?.userCut))} researchPot=${format(
        toBigInt(completedEvent.args?.researchPot)
      )} worthyCount=${completedEvent.args?.worthyCount}`
    );
  }

  const participants = [
    { label: "Creator", addr: creator.address },
    { label: "ResearcherA", addr: researcherA.address },
    { label: "ResearcherB", addr: researcherB.address },
    { label: "ResearcherC", addr: researcherC.address },
    { label: "Treasury", addr: treasuryAddress }
  ];

  console.log("Balances after completion:");
  for (const p of participants) {
    const balance = await token.balanceOf(p.addr);
    console.log(`- ${p.label}: ${format(balance)} tokens`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
