# Soma Inquiry POC — Frontend Handoff (Base Sepolia)

## 1. Context & Goal
Build a crypto-native demo that walks through the Base Sepolia "Soma Inquiry" lifecycle: a user opens an incentivized research inquiry, multiple researchers stake and contribute, and the creator distributes rewards on completion. UX tone: privacy-first, hacker-lab aesthetic, transparent on-chain actions.

## 2. Live Contracts & Network
All contracts are deployed on **Base Sepolia** (chainId `84532`). RPC for local testing: `https://sepolia.base.org`.

| Module | Address | Notes |
| --- | --- | --- |
| SomaTreasury | `0xa7ac4B665e756Ce1575eFDC902Dc2C00bfE8e959` | Receives penalty splits; owner sweeps funds. |
| SomaRegistry | `0xbC6F9458304d1e951CF953ac9AB567Bd5E185Fc0` | Stores protocol parameters (INIT_BPS=10%, refund ratios, treasury %), token allowlist, and Treasury reference. |
| InquiryManager | `0x7BC30f2409e1790eA37Fc9BB9851d29ccaf942C2` | Core state machine (create inquiry, researcher initiations, accept / reject / worthy, complete payouts). |
| EscrowVault | `0xdFC33798720367F430fc58d662f56a3Edf5e00C3` | Holds ERC20 balances on behalf of the InquiryManager. |

**Token:** Base Sepolia canonical WETH (`0x4200000000000000000000000000000000000006`, 18 decimals). All incentives and researcher stakes use WETH.

## 3. Required Wallet UX
- Show connected wallet address + Base Sepolia indicator at all times.
- Surface ETH & WETH balances; prompt to wrap if WETH < minimum (use contract `deposit()` on WETH).
- Handle approvals: users and researchers must approve `EscrowVault` (address above) to transfer WETH on their behalf (via `WETH.approve(EscrowVault, amount)` before staking).
- Transaction toasts with explorer links (https://sepolia.basescan.org/tx/...).

## 4. Primary Flows & On-Chain Calls
### A. Creator Flow (`/intake`)
1. Capture intent: goal, traits, safety info, optional hint string (we only store `bytes32 publicHint` on-chain; suggest keccak of longer content stored off-chain/IPFS).
2. Ask creator to wrap WETH if needed and choose deposit amount (default 100 WETH units for demo, adjust as UI sees fit).
3. Call `InquiryManager.createInquiry(WETH, amount, hintBytes32)` (no ETH value). Prereqs:
   - `WETH.approve(EscrowVault, amount)`
   - Validate registry allowlist: token already enabled for WETH.
   - Recommended demo deposit: **0.01 WETH** (adjust UI default accordingly).
4. Success state shows:
   - Inquiry ID (incremental `nextId` returned via event `InquiryCreated(id, ...)`).
   - Public hint (decoded).
   - Initial total incentive (equals creator deposit).
   - Tx hash + explorer link.
   - Status rail at `Created`.

### B. Researcher Flow (`/researcher/queue` & `/inquiry/[id]`)
1. Display open inquiries (IDs, creator hint, current total incentive, required next initiation amount). Compute required stake via read helper `InquiryManager.requiredInitiationAmount(id)`.
2. Researcher approves WETH if needed, then calls `InquiryManager.initiate(id)` (triggers WETH transfer from researcher into vault). After call:
   - Total incentive increases.
   - `Initiated` event provides `amount` and next required amount (pre-computed).
3. Creator reviews initiations per inquiry:
   - Accept: `InquiryManager.acceptInitiation(id, idx)` (no funds move, marks accepted).
     - Immediately after acceptance, open a secure off-chain channel (e.g., end-to-end encrypted chat modal) between the creator and the accepted researcher. Both parties should see a notification/badge indicating the channel is live.
     - Within that channel, researchers can request supplemental data (additional `.vcf`, `.fasta`, longitudinal metrics, etc.) and the creator can respond or attach files/links. Log the interaction locally; only hashes or encrypted references should touch the chain.
   - Reject (pre-acceptance): `InquiryManager.rejectInitiation(id, idx)` --> automatically refunds ~90%, splits penalty per registry settings (logs `InitiationRejected`). UI should show refund/penalty amounts.
   - Mark worthy: `InquiryManager.markWorthy(id, idx)`; mark unworthy: `InquiryManager.markUnworthyAndRefund(id, idx)` (80% refund by default + penalty logic). Both emit events with refund/penalty breakdown and update total incentive (pool grows by penalty poolPart).
4. Completion: once at least one accepted initiation is marked worthy and no accepted entries remain unresolved, allow creator to call `InquiryManager.complete(id)`:
   - Splits user cut (10% of total) to creator.
   - Distributes remaining research pot proportionally to inverse initiation amounts (`SomaMath.inverseWeight` logic).
   - Emits `Completed` with user cut, research pot, and worthy count.
   - Vault sends payouts; inquiry `completed=true`.

### Status Mapping
Display a horizontal rail with the following checkpoints:
1. `Created` (after `createInquiry`)
2. `Initiated` (list researchers, their stake amounts, acceptance status)
3. `Accepted` / `Rejected` badges per initiation
4. `Worthy` / `Unworthy` tags for accepted entries
5. `Completed` once payouts executed

### Treasury / Penalty Insight
In rejection/unworthy flows, show the penalty split:
- Refund percentage (90% or 80% default).
- Treasury portion (50% of penalty).
- Pool top-up portion (remaining 50%).
Display treasury address or link for transparency.

## 5. Suggested Screens
- **Landing:** Quick explainer of Soma Inquiry, link to create inquiry, link to researcher console.
- **Create Inquiry Wizard:** Multi-step form culminating in deposit + on-chain tx.
- **Inquiry Detail:** Combine creator & researcher view with tabs (Overview, Initiations, Worthy Outcomes, Activity log). Listen to events for live updates.
- **Secure Channel Drawer:** When an initiation is accepted, surface an encrypted chat/file-share drawer tied to that researcher. Include request templates ("Upload additional lab values", "Share raw sequencing"), status tags (Requested, Fulfilled), and a reminder that only hashed references should appear on-chain.
- **Researcher Queue:** Table/grid of open inquiries with computed next required amount and quick "Initiate" button (with confirm modal showing WETH stake requirement).
- **Treasury Dashboard (optional):** Show aggregated penalties and ability for owner to view sweep state (future admin UI).

## 6. Data Sources & Indexing
- Short-term: read directly from contract calls (`inquiries(id)`, `getInitiations(id)`, `currentTotals(id)`). Hardhat sample script demonstrates usage.
- Long-term: consider event indexing for timeline view (e.g., subgraph, `ethers.Provider.getLogs`). Key events: `InquiryCreated`, `Initiated`, `InitiationAccepted`, `InitiationRejected`, `MarkedWorthy`, `MarkedUnworthy`, `Completed`.
- Off-chain content: hints or suggestions can link to IPFS CIDs (UI should display truncated hash + copy button); backend can manage actual storage.

## 7. Dev Utilities
- Wrap ETH → WETH: `npx hardhat wrap --amount 0.25 --network baseSepolia` (env overrides for sandbox already in README/AGENTS).
- Demo script reference: `scripts/demo-flow.ts` shows orchestrated happy path; mimic its sequence when wiring UI.
- Nonce & code helpers: `scripts/show-nonce.ts`, `scripts/check-code.ts`, `scripts/configure-registry.ts` available for troubleshooting.

## 8. ENV Template (frontend)
```
NEXT_PUBLIC_CHAIN_ID=84532
NEXT_PUBLIC_RPC_URL=https://sepolia.base.org
NEXT_PUBLIC_EXPLORER=https://sepolia.basescan.org
NEXT_PUBLIC_WETH=0x4200000000000000000000000000000000000006
NEXT_PUBLIC_INQUIRY_MANAGER=0x7BC30f2409e1790eA37Fc9BB9851d29ccaf942C2
NEXT_PUBLIC_ESCROW_VAULT=0xdFC33798720367F430fc58d662f56a3Edf5e00C3
NEXT_PUBLIC_REGISTRY=0xbC6F9458304d1e951CF953ac9AB567Bd5E185Fc0
NEXT_PUBLIC_TREASURY=0xa7ac4B665e756Ce1575eFDC902Dc2C00bfE8e959
```
For server-side scripts that need private keys or BaseScan API keys, reuse the backend `.env` (never expose secrets client-side).

## 9. Visual / Copy Notes
- Keep the glitchy bio-hacker aesthetic: dark background, glitch teal (#22E1FF), bio-lime (#B4FF3B) for accents, zero border radius, dotted separators.
- Typography: Inter for UI, IBM Plex Mono for hashes / table labels.
- Motion: quick (<150ms), disable animations if `prefers-reduced-motion`.
- Copy tone: "clinical but hacker" — concise, descriptive, not marketing-heavy. Highlight safety checkpoints (e.g., "Initiation rejected: 90% refunded, 10% split between treasury and inquiry pool").

## 10. Outstanding Gaps / Next Steps
- No on-chain role gating: UI should rely on connected wallet context (creator vs researcher) and show/hide controls accordingly.
- No IPFS integration yet; incorporate if design requires storing detailed suggestions.
- Tests currently limited to scripts; consider mocking contract calls with viem when building components.
- If time permits, add BaseScan verification links on completion screen.
