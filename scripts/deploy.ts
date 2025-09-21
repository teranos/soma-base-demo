import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const { TREASURY_PAYOUT, TOKEN } = process.env;
  const [deployer] = await ethers.getSigners();

  if (!deployer) {
    throw new Error("No deployer signer available");
  }

  console.log(`Deployer: ${deployer.address}`);

  const payout = TREASURY_PAYOUT && TREASURY_PAYOUT !== ""
    ? TREASURY_PAYOUT
    : deployer.address;

  const feeData = await ethers.provider.getFeeData();
  const baseGasPrice = feeData.gasPrice ?? ethers.parseUnits("5", "gwei");
  const gasPrice = (baseGasPrice * 3n);
  const overrides = { gasPrice };

  const SomaTreasury = await ethers.getContractFactory("SomaTreasury");
  const existingTreasury = process.env.EXISTING_TREASURY?.trim();
  const treasury = existingTreasury && existingTreasury !== ""
    ? SomaTreasury.attach(existingTreasury)
    : await SomaTreasury.deploy(payout, overrides);
  if (!existingTreasury) {
    await treasury.waitForDeployment();
  }
  console.log(`SomaTreasury: ${await treasury.getAddress()}`);

  const SomaRegistry = await ethers.getContractFactory("SomaRegistry");
  const existingRegistry = process.env.EXISTING_REGISTRY?.trim();
  const registry = existingRegistry && existingRegistry !== ""
    ? SomaRegistry.attach(existingRegistry)
    : await SomaRegistry.deploy(await treasury.getAddress(), deployer.address, overrides);
  if (!existingRegistry) {
    await registry.waitForDeployment();
  }
  console.log(`SomaRegistry: ${await registry.getAddress()}`);

  const InquiryManager = await ethers.getContractFactory("InquiryManager");
  const existingManager = process.env.EXISTING_MANAGER?.trim();
  const manager = existingManager && existingManager !== ""
    ? InquiryManager.attach(existingManager)
    : await InquiryManager.deploy(deployer.address, overrides);
  if (!existingManager) {
    await manager.waitForDeployment();
  }
  console.log(`InquiryManager: ${await manager.getAddress()}`);

  const EscrowVault = await ethers.getContractFactory("EscrowVault");
  const existingVault = process.env.EXISTING_VAULT?.trim();
  const vault = existingVault && existingVault !== ""
    ? EscrowVault.attach(existingVault)
    : await EscrowVault.deploy(await manager.getAddress(), overrides);
  if (!existingVault) {
    await vault.waitForDeployment();
  }
  console.log(`EscrowVault: ${await vault.getAddress()}`);

  if (!existingManager) {
    const registryTx = await manager.setRegistry(await registry.getAddress(), overrides);
    await registryTx.wait();
    console.log("Registry wired to InquiryManager");

    const vaultTx = await manager.setVault(await vault.getAddress(), overrides);
    await vaultTx.wait();
    console.log("Vault wired to InquiryManager");
  } else {
    console.log("Manager already deployed; skipping wiring calls");
  }

  if (TOKEN && TOKEN !== "" && TOKEN !== ethers.ZeroAddress) {
    const allowTx = await registry.setTokenAllowed(TOKEN, true, overrides);
    await allowTx.wait();
    console.log(`Token allowlisted: ${TOKEN}`);
    const enforceTx = await registry.setAllowlistEnforcement(true, overrides);
    await enforceTx.wait();
    console.log("Allowlist enforcement enabled");
  }

  console.log("Deployment complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
