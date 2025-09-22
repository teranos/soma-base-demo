import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, GitBranch, ListTree } from "lucide-react";

import { useMockData } from "@/context/MockDataContext";
import { formatRelativeTime } from "@/lib/utils";

const stateBadge: Record<string, string> = {
  creation: "border-soma-teal/40 text-soma-teal",
  accept: "border-soma-lime/50 text-soma-lime",
  update: "border-slate-600 text-slate-300",
  reject: "border-amber-300/40 text-amber-200",
  complete: "border-soma-lime/40 text-soma-lime",
  worthy: "border-soma-lime/60 text-soma-lime",
  unworthy: "border-rose-400/40 text-rose-200"
};

export const LatestInquiriesFeed = () => {
  const { inquiries } = useMockData();
  const [heartbeat, setHeartbeat] = useState(0);

  const entries = useMemo(() => {
    return inquiries
      .flatMap((inq) =>
        inq.timeline.map((event) => ({
          id: `${inq.id}-${event.id}`,
          inquiryId: inq.id,
          inquiryTitle: inq.title,
          status: inq.status,
          eventLabel: event.label,
          eventKind: event.kind,
          timestamp: event.timestamp
        }))
      )
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 5);
  }, [inquiries, heartbeat]);

  useEffect(() => {
    const interval = setInterval(() => setHeartbeat((prev) => prev + 1), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span className="inline-flex items-center gap-2 font-medium text-slate-100">
          <ListTree className="h-4 w-4 text-soma-teal" />
          Latest inquiry events
        </span>
        <span className="text-xs font-mono text-slate-500">Synced off InquiryManager logs</span>
      </div>
      <div className="mt-4 space-y-3">
        {entries.map((entry) => (
          <Link
            key={entry.id}
            to={`/inquiry/${entry.inquiryId}`}
            className="flex flex-col gap-2 rounded-xl border border-slate-800/60 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 transition hover:border-soma-teal/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <GitBranch className="h-4 w-4 text-slate-400" />
                #{entry.inquiryId}
              </div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-wide ${
                  stateBadge[entry.eventKind] ?? "border-slate-700 text-slate-300"
                }`}
              >
                {entry.eventKind}
              </span>
            </div>
            <div className="text-base font-semibold text-slate-100">{entry.inquiryTitle}</div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-mono text-slate-200">{entry.eventLabel}</span>
              <span className="font-mono text-slate-500">{formatRelativeTime(entry.timestamp)}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ArrowUpRight className="h-3.5 w-3.5 text-soma-teal" />
              View inquiry detail
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
