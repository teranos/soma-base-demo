import { Coins, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { useMockData } from "../context/MockDataContext";

const statusVariant = (status: string) => {
  if (status === "worthy") return "text-soma-lime";
  if (status === "accepted") return "text-soma-teal";
  if (status === "rejected" || status === "unworthy") return "text-red-400";
  return "text-slate-400";
};

export const ResearcherPortalPage = () => {
  const { inquiries, initiateInquiry, wallet } = useMockData();
  const queue = inquiries.filter((inquiry) => inquiry.status !== "completed");
  const myActiveInitiations = inquiries
    .flatMap((inquiry) =>
      inquiry.initiations
        .filter((init) => init.researcher === wallet.address && ["pending", "accepted", "worthy"].includes(init.status))
        .map((init) => ({ inquiry, initiation: init }))
    )
    .slice(0, 4);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold text-slate-100">Researcher portal</h1>
        <p className="text-sm text-slate-400">
          Survey open Soma inquiries, check the next WETH stake, and jump straight into encrypted channels once
          you&apos;re accepted.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 text-sm text-slate-300">
        <p className="text-xs uppercase tracking-wide text-slate-500">My active initiations</p>
        {myActiveInitiations.length === 0 ? (
          <p className="mt-3 text-xs text-slate-500">
            No active initiations yet. Once you stake into a queue, your encrypted channel will surface here.
          </p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {myActiveInitiations.map(({ inquiry, initiation }) => (
              <Link
                key={initiation.id}
                to={`/researcher/inquiries/${inquiry.id}/initiations/${initiation.id}`}
                className="rounded border border-slate-800/60 bg-slate-950/60 p-3 transition hover:border-soma-teal/60"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">#{inquiry.id}</span>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5 uppercase tracking-wide text-[10px]">
                    {initiation.status}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-slate-100 line-clamp-2">{inquiry.publicHint}</p>
                <p className="mt-2 text-xs text-slate-500">Stake {initiation.amount.toFixed(3)} WETH</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Opportunities</p>
            <h2 className="text-lg font-semibold text-slate-100">Open inquiries</h2>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {queue.map((inquiry) => (
            <div key={inquiry.id} className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-lg shadow-slate-900/30">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs text-slate-500">#{inquiry.id}</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-100">{inquiry.publicHint}</h3>
                  <p className="mt-2 max-w-xl text-sm text-slate-400 line-clamp-3">{inquiry.goal}</p>
                </div>
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-300">
                  <p className="font-semibold text-slate-200">Next stake</p>
                  <p className="mt-2 font-mono text-slate-100">{inquiry.nextRequired.toFixed(3)} WETH</p>
                  <p className="text-[11px] text-slate-500">Required to initiate</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-xs md:grid-cols-3">
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-3">
                  <p className="font-semibold text-slate-200">Total incentive</p>
                  <p className="mt-2 font-mono text-slate-100">{inquiry.totalIncentive.toFixed(3)} WETH</p>
                </div>
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-3">
                  <p className="font-semibold text-slate-200">Accepted channels</p>
                  <p className="mt-2 text-slate-100">{inquiry.initiations.filter((init) => init.status === "accepted" || init.status === "worthy").length}</p>
                </div>
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-3">
                  <p className="font-semibold text-slate-200">Treasury penalties</p>
                  <p className="mt-2 text-slate-100">
                    {inquiry.initiations.reduce((total, init) => total + (init.treasuryCut ?? 0), 0).toFixed(3)} WETH
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs uppercase tracking-wide text-slate-500">Recent initiations</p>
                <div className="space-y-2">
                  {inquiry.initiations.slice(-3).reverse().map((init) => (
                    <div key={init.id} className="flex flex-wrap items-center justify-between gap-2 rounded border border-slate-800/60 bg-slate-950/60 px-3 py-2">
                      <div>
                        <p className="text-sm font-medium text-slate-100">{init.ens ?? init.researcher}</p>
                        <p className="text-xs text-slate-500">{new Date(init.updatedAt).toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-sm text-slate-200">{init.amount.toFixed(3)} WETH</p>
                        <p className={`text-xs ${statusVariant(init.status)}`}>{init.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => initiateInquiry(inquiry.id)}
                  className="inline-flex items-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-3.5 py-2 text-sm font-medium text-soma-teal transition hover:bg-slate-800"
                >
                  <Coins className="h-4 w-4" />
                  Initiate (mock)
                </button>
                <Link
                  to={`/researcher/inquiries/${inquiry.id}`}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-slate-100"
                >
                  Inspect inquiry
                  <Sparkles className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {queue.length === 0 ? (
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 text-center text-sm text-slate-400">
            No open inquiries at the moment. Set alerts on-chain or check back soon.
          </div>
        ) : null}
      </section>
    </div>
  );
};
