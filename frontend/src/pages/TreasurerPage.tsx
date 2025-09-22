import { ShieldCheck, Wallet2, WalletCards } from "lucide-react";

import { useMockData } from "../context/MockDataContext";
import { incentiveTokenAddress, networkMeta, protocolAddresses } from "../lib/config";
import { truncateAddress } from "../lib/utils";

export const TreasurerPage = () => {
  const { inquiries } = useMockData();

  const treasuryTotal = inquiries.reduce((total, inquiry) => {
    return (
      total +
      inquiry.initiations.reduce((acc, init) => acc + (init.treasuryCut ?? 0), 0)
    );
  }, 0);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold text-slate-100">Treasurer console</h1>
        <p className="text-sm text-slate-400">
          Monitor protocol addresses, penalty inflows, and on-chain references relevant to the treasury key
          holder.
        </p>
      </header>

      <section className="grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-3">
        <article className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-5 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-500">Network</p>
          <p className="mt-2 font-semibold text-slate-100">{networkMeta.label}</p>
          <p className="mt-1 font-mono text-[11px] text-slate-500">chainId {networkMeta.chainId}</p>
        </article>
        <article className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-5 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-500">Treasury inflow</p>
          <p className="mt-2 font-mono text-lg text-slate-100">{treasuryTotal.toFixed(3)} WETH</p>
          <p className="mt-1 text-xs text-slate-500">Aggregated from current inquiries</p>
        </article>
        <article className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-5 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-500">Incentive token</p>
          <p className="mt-2 font-mono text-xs text-slate-200">{truncateAddress(incentiveTokenAddress)}</p>
          <p className="mt-1 text-xs text-slate-500">Canonical Base WETH</p>
        </article>
      </section>

      <section className="grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Core contracts</p>
          <dl className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-slate-200">
                <Wallet2 className="h-4 w-4 text-soma-teal" /> Treasury
              </dt>
              <dd className="font-mono text-xs text-slate-400">{protocolAddresses.treasury}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-slate-200">
                <WalletCards className="h-4 w-4 text-soma-teal" /> Registry
              </dt>
              <dd className="font-mono text-xs text-slate-400">{protocolAddresses.registry}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="h-4 w-4 text-soma-teal" /> Inquiry manager
              </dt>
              <dd className="font-mono text-xs text-slate-400">{protocolAddresses.inquiryManager}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-slate-200">
                <ShieldCheck className="h-4 w-4 text-soma-teal" /> Escrow vault
              </dt>
              <dd className="font-mono text-xs text-slate-400">{protocolAddresses.escrowVault}</dd>
            </div>
          </dl>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-500">Penalty routing</p>
          <p>
            When a user rejects or marks an initiation unworthy, half of the penalty increases the active
            research pool and half routes here. Keep an eye on EscrowVault events to track new inflows before
            you sweep.
          </p>
          <p className="text-xs text-slate-500">
            This prototype provides a snapshot only—no on-chain calls are triggered from this interface.
          </p>
        </div>
      </section>
    </div>
  );
};
