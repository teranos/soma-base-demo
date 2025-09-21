import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import * as dotenv from "dotenv";

dotenv.config();

const rawPrivateKey = process.env.PRIVATE_KEY;

const accounts = rawPrivateKey
  ? rawPrivateKey
      .split(",")
      .map((key) => key.trim())
      .filter((key) => key.length > 0)
  : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    base: {
      url: "https://mainnet.base.org",
      chainId: 8453,
      accounts
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      chainId: 84532,
      accounts
    }
  },
  etherscan: {
    apiKey: {
      base: process.env.BASESCAN_API_KEY || "",
      baseSepolia: process.env.BASESCAN_API_KEY || ""
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      },
      {
        network: "baseSepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  }
};

task("wrap", "Wrap ETH into canonical WETH on Base networks")
  .addParam("amount", "Amount of ETH to wrap as a decimal string")
  .setAction(async ({ amount }, hre) => {
    const value = hre.ethers.parseEther(amount);
    if (value <= 0n) {
      throw new Error("amount must be positive");
    }

    const [signer] = await hre.ethers.getSigners();
    if (!signer) {
      throw new Error("signer unavailable");
    }

    const IWETH9 = [
      "function deposit() payable",
      "function balanceOf(address) view returns (uint256)"
    ];

    const wethAddress = "0x4200000000000000000000000000000000000006";
    const weth = new hre.ethers.Contract(wethAddress, IWETH9, signer);

    console.log(`Wrapping ${amount} ETH for ${await signer.getAddress()}`);
    const tx = await weth.deposit({ value });
    console.log(`Submitted tx: ${tx.hash}`);
    await tx.wait();
    const balance = await weth.balanceOf(await signer.getAddress());
    console.log(`WETH balance: ${hre.ethers.formatEther(balance)} WETH`);
  });

export default config;
