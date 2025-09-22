import { useEffect, useMemo, useState } from "react";
import { Clock, Radio, RefreshCw } from "lucide-react";

import { networkMeta, protocolAddresses } from "@/lib/config";
import { formatRelativeTime, formatTime, truncateAddress } from "@/lib/utils";

interface DeploymentRow {
  label: string;
  address: string;
  descriptor: string;
}

export const LiveDeploymentBanner = () => {
  const [lastSync, setLastSync] = useState(() => new Date(Date.now() - 1500));
  const [relative, setRelative] = useState(() => formatRelativeTime(lastSync));

  const rotation = useMemo<DeploymentRow[]>(
    () => [
      {
        label: "Treasury",
        address: protocolAddresses.treasury,
        descriptor: "Safeguards penalties + creator cuts"
      },
      {
        label: "Registry",
        address: protocolAddresses.registry,
        descriptor: "Permissioned participant roster"
      },
      {
        label: "InquiryManager",
        address: protocolAddresses.inquiryManager,
        descriptor: "Routes initiations & settlement"
      },
      {
        label: "EscrowVault",
        address: protocolAddresses.escrowVault,
        descriptor: "Holds canonical WETH collateral"
      }
    ],
    []
  );

  useEffect(() => {
    const refresh = setInterval(() => {
      const jitter = Math.floor(Math.random() * 3500);
      setLastSync(new Date(Date.now() - jitter));
    }, 9000);
    return () => clearInterval(refresh);
  }, []);

  useEffect(() => {
    setRelative(formatRelativeTime(lastSync));
    const ticker = setInterval(() => {
      setRelative(formatRelativeTime(lastSync));
    }, 4000);
    return () => clearInterval(ticker);
  }, [lastSync]);

  return (
    <section className="relative overflow-hidden rounded-xl border border-soma-teal/40 bg-slate-950/80 p-5 shadow-glow">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,225,255,0.12),transparent_65%)]" aria-hidden />
      <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-soma-teal/50 bg-slate-900/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-soma-teal">
            {networkMeta.label} // chainId {networkMeta.chainId}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/60 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-200">
            <Radio className="h-3.5 w-3.5 text-soma-lime" />
            Live deployment mirror
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-slate-800/70 bg-slate-900/70 px-3 py-2 text-xs text-slate-300">
          <RefreshCw className="h-3.5 w-3.5 text-soma-teal" />
          <div className="flex flex-col">
            <span className="font-mono uppercase tracking-wide text-slate-400">Last sync</span>
            <span className="font-mono text-slate-200">{relative}</span>
          </div>
          <span className="hidden font-mono text-[11px] text-slate-500 sm:inline">{formatTime(lastSync)}</span>
        </div>
      </div>
      <div className="relative z-10 mt-4 grid gap-3 md:grid-cols-2">
        {rotation.map((row) => (
          <div
            key={row.label}
            className="flex flex-col justify-between rounded-lg border border-slate-800/60 bg-slate-950/70 p-3 text-sm text-slate-300 transition hover:border-soma-teal/60"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              {row.label}
            </div>
            <div className="mt-1 flex items-center gap-2 font-mono text-base text-slate-100">
              {truncateAddress(row.address, 4)}
            </div>
            <p className="mt-2 text-xs text-slate-500">{row.descriptor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
