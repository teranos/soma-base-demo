# Soma Inquiry POC

Minimal Hardhat + TypeScript workspace modelling the Soma Inquiry flow on Base. It deploys a treasury, registry, escrow vault, and inquiry manager that orchestrates researcher initiations around an existing 18-decimal ERC20 incentive token.

## Install

```bash
npm install
```

## Environment

Copy `.env.example` to `.env` and populate:

```
PRIVATE_KEY=0xabc...,0xdef...        # comma separated if you need multiple demo signers
BASESCAN_API_KEY=your_basescan_key
TREASURY_PAYOUT=0xTreasuryPayout
TOKEN=0xIncentiveToken
MANAGER_ADDRESS=0xManager (for demo script only)
```

## Compile

```bash
npx hardhat compile
```

## Deploy

Base Sepolia:

```bash
npm run deploy:basesepolia
```

Base mainnet:

```bash
npm run deploy:base
```

The deploy script wires `SomaTreasury`, `SomaRegistry`, `InquiryManager`, and `EscrowVault`, and optionally allowlists `TOKEN` if provided.

## Verify on Basescan

After deployment gather the emitted addresses, then run:

```bash
npx hardhat verify --network baseSepolia <TREASURY_ADDR> <TREASURY_PAYOUT>
npx hardhat verify --network baseSepolia <REGISTRY_ADDR> <TREASURY_ADDR> <OWNER_ADDR>
npx hardhat verify --network baseSepolia <MANAGER_ADDR> <OWNER_ADDR>
npx hardhat verify --network baseSepolia <VAULT_ADDR> <MANAGER_ADDR>
```

Swap `baseSepolia` for `base` when verifying on mainnet.

## Demo Flow

The POC demo assumes everyone already holds the ERC20 on Base Sepolia. Export `MANAGER_ADDRESS` (the deployed InquiryManager) and run:

```bash
npx hardhat run --network baseSepolia scripts/demo-flow.ts
```

The script:
- Creator stakes 100 tokens with hint `HINT`.
- Three researchers initiate sequentially (10%, 11%, 12% after rounding down).
- Creator accepts initiations 0/2, rejects initiation 1, marks 0 worthy and 2 unworthy.
- Completion pays 10% back to the creator and the remaining pot to worthy researchers weighted by inverse entry price, logging refunds, penalties, and final balances.

## Notes

- Contracts target Solidity ^0.8.24 with OpenZeppelin Ownable + ReentrancyGuard; no upgradeability or pausing.
- Percentages and penalty math centralised inside `SomaRegistry` + `SomaMath` with deterministic floor rounding.
- All interactions assume an existing 18-decimal ERC20; no new token is minted here.
- Out-of-band communication, advanced authentication, and privacy tooling (e.g. Nym) remain future work.
