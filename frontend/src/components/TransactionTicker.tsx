import { useEffect, useMemo, useRef, useState } from "react";
import { Activity, ArrowDownLeft, ArrowUpRight, BadgeCheck } from "lucide-react";

import { formatRelativeTime, truncateAddress } from "@/lib/utils";

interface MockTransaction {
  id: string;
  hash: string;
  contract: string;
  method: string;
  value: string;
  gas: number;
  status: "confirmed" | "pending" | "reverted";
  direction: "inbound" | "outbound";
  timestamp: Date;
  description: string;
}

const baseTemplates = [
  {
    contract: "InquiryManager",
    method: "handleInitiation(uint256,uint256,address)",
    value: "0.033 WETH",
    direction: "inbound" as const,
    status: "confirmed" as const,
    description: "etherwalk.base staked escrow"
  },
  {
    contract: "EscrowVault",
    method: "releaseVault(uint256,address)",
    value: "0.018 WETH",
    direction: "outbound" as const,
    status: "pending" as const,
    description: "Creator draw-down queued"
  },
  {
    contract: "InquiryManager",
    method: "tagInitiation(uint256,uint256,bool)",
    value: "0.041 WETH",
    direction: "outbound" as const,
    status: "confirmed" as const,
    description: "Penalty split routed to treasury"
  },
  {
    contract: "EscrowVault",
    method: "rebalance(uint256)",
    value: "0.004 WETH",
    direction: "inbound" as const,
    status: "confirmed" as const,
    description: "Treasury sweep backfill"
  },
  {
    contract: "InquiryManager",
    method: "openChannel(uint256,uint256)",
    value: "--",
    direction: "inbound" as const,
    status: "confirmed" as const,
    description: "Secure drawer unlocked"
  }
];

const statusStyles: Record<MockTransaction["status"], string> = {
  confirmed: "text-soma-lime border-soma-lime/50",
  pending: "text-amber-300 border-amber-300/40",
  reverted: "text-rose-300 border-rose-300/40"
};

const directionIcon = {
  inbound: ArrowDownLeft,
  outbound: ArrowUpRight
};

const makeHash = () =>
  `0x${Array.from({ length: 64 })
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("")}`;

const withGas = () => Math.floor(110_000 + Math.random() * 55_000);

const prepareTransaction = (templateIndex: number): MockTransaction => {
  const template = baseTemplates[templateIndex % baseTemplates.length];
  return {
    id: crypto.randomUUID(),
    hash: makeHash(),
    contract: template.contract,
    method: template.method,
    value: template.value,
    gas: withGas(),
    status: template.status,
    direction: template.direction,
    timestamp: new Date(),
    description: template.description
  };
};

export const TransactionTicker = () => {
  const cursor = useRef(0);
  const [events, setEvents] = useState<MockTransaction[]>(() =>
    Array.from({ length: 4 }).map((_, idx) => prepareTransaction(idx))
  );
  const [, setHeartbeat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      cursor.current += 1;
      setEvents((prev) => {
        const next = prepareTransaction(cursor.current);
        return [next, ...prev].slice(0, 6);
      });
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => {
      setHeartbeat((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(ticker);
  }, []);

  const headerLabel = useMemo(
    () =>
      `Escrow activity · ${events[0] ? formatRelativeTime(events[0].timestamp) : ""}`,
    [events]
  );

  return (
    <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span className="inline-flex items-center gap-2 font-medium text-slate-100">
          <Activity className="h-4 w-4 text-soma-teal" />
          {headerLabel}
        </span>
        <span className="text-xs font-mono text-slate-500">Mocked for demo fidelity</span>
      </div>
      <div className="mt-4 space-y-3">
        {events.map((tx) => {
          const Icon = directionIcon[tx.direction];
          return (
            <div
              key={tx.id}
              className="flex flex-col gap-2 rounded-xl border border-slate-800/60 bg-slate-950/80 px-4 py-3 text-sm text-slate-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <Icon className="h-4 w-4 text-slate-400" />
                  {truncateAddress(tx.hash, 6)}
                </div>
                <span className={`rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-wide ${
                  statusStyles[tx.status]
                }`}
                >
                  {tx.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="font-mono text-slate-200">{tx.contract}</span>
                <span className="hidden truncate text-slate-500 sm:inline">{tx.method}</span>
                <span className="font-mono text-slate-200">Gas: {tx.gas.toLocaleString()}</span>
                <span className="font-mono text-soma-teal">{tx.value}</span>
                <span className="font-mono text-slate-500">{formatRelativeTime(tx.timestamp)}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <BadgeCheck className="h-3.5 w-3.5 text-soma-lime" />
                {tx.description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
