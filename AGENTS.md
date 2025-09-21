# Repository Guidelines

## Base Sepolia Deployment Map
All contracts are live on Base Sepolia and mirrored in `.env` for deterministic reuse:
- Treasury: `0xa7ac4B665e756Ce1575eFDC902Dc2C00bfE8e959`
- Registry: `0xbC6F9458304d1e951CF953ac9AB567Bd5E185Fc0`
- InquiryManager: `0x7BC30f2409e1790eA37Fc9BB9851d29ccaf942C2`
- EscrowVault: `0xdFC33798720367F430fc58d662f56a3Edf5e00C3`
The canonical 18-decimal incentive token is Base WETH: `0x4200000000000000000000000000000000000006`.

## Project Layout
- `contracts/` — Solidity sources (Treasury, Registry, Math library, Vault, InquiryManager).
- `scripts/` — TypeScript ops: deploy, demo flow, nonce/code inspection, registry configuration, ETH→WETH wrapper.
- `hardhat.config.ts` — Hardhat + TypeScript config with Base/Base Sepolia networks and custom `wrap` task.
- `README.md` — Setup instructions, verification notes, demo walkthrough.
- `.env` — Secrets + live contract addresses (`EXISTING_*`, `MANAGER_ADDRESS`, etc.).
- `artifacts/`, `cache/` — Generated build output (gitignored).

## Dev Commands
```bash
npm install
npx hardhat compile
HARDHAT_GLOBAL_DIR=.hardhat-global HARDHAT_USER_HOME=.hardhat BUIDLER_USER_HOME=.hardhat \
  npx hardhat wrap --amount 0.2 --network baseSepolia
HARDHAT_GLOBAL_DIR=.hardhat-global HARDHAT_USER_HOME=.hardhat BUIDLER_USER_HOME=.hardhat \
  npx hardhat run --network baseSepolia scripts/demo-flow.ts
```
`npm run deploy:basesepolia` reuses live addresses when `EXISTING_*` is set, so only unset variables to redeploy selectively.

## Coding & Testing Practices
- Solidity ^0.8.24 using OpenZeppelin Ownable, IERC20, ReentrancyGuard; enable the optimizer (200 runs).
- State-changing flows emit detailed events for off-chain monitoring.
- Keep deterministic integer math via `SomaMath` helpers; vault isolates token custody.
- Write tests in Hardhat/TypeScript (future work); scripts double as integration fixtures today.

## Environment & Secrets
- `.env` must only exist locally; never commit private keys or BaseScan API keys.
- When sharing references, only point to public addresses; rotate keys if PLAINTEXT is ever exposed.

## Git & PR Flow
- `main` tracks `origin/main` (`git@github.com:teranos/soma-base-demo.git`).
- Commits: imperative subject (`Add inquiry demo script`), meaningful body when required.
- PRs should include deployment links (BaseScan), console logs from `scripts/demo-flow.ts`, and any scope-limiting assumptions.
