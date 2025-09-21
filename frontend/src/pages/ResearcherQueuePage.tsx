import { ArrowRight, Coins, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useMockData } from "../context/MockDataContext";

const statusVariant = (status: string) => {
  if (status === "worthy") return "text-soma-lime";
  if (status === "accepted") return "text-soma-teal";
  if (status === "rejected" || status === "unworthy") return "text-red-400";
  return "text-slate-400";
};

export const ResearcherQueuePage = () => {
  const { inquiries, initiateInquiry, wallet } = useMockData();
  const queue = inquiries.filter((inq) => inq.status !== "completed");

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-100">Researcher queue</h1>
          <p className="mt-2 text-sm text-slate-400">
            Spot open inquiries, review required WETH stake, and follow acceptance velocity before you initiate.
          </p>
        </div>
        <Link
          to="/intake"
          className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:text-slate-100"
        >
          Become a creator
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      {wallet.role !== "researcher" ? (
        <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-5 text-sm text-slate-300">
          <p className="font-semibold text-slate-100">Heads up</p>
          <p className="mt-1 text-slate-400">
            Switch your role to <span className="text-soma-lime">Researcher</span> to enable mock initiations and secure channel requests.
          </p>
        </div>
      ) : null}

      <section className="grid gap-5 xl:grid-cols-2">
        {queue.map((inquiry) => (
          <div key={inquiry.id} className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-slate-500">#{inquiry.id}</span>
                <h2 className="mt-2 text-lg font-semibold text-slate-100">{inquiry.title}</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-400">{inquiry.goal}</p>
              </div>
              <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Stake window</p>
                <p className="mt-2 font-mono text-slate-200">{inquiry.nextRequired.toFixed(3)} WETH</p>
                <p className="text-[11px] text-slate-500">Required for next initiation</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
              {inquiry.traits.map((trait) => (
                <span key={trait} className="rounded-full border border-slate-700 px-3 py-1">
                  {trait}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
              <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                <p className="font-semibold text-slate-200">Total incentive</p>
                <p className="mt-2 font-mono text-slate-100">{inquiry.totalIncentive.toFixed(3)} WETH</p>
                <p className="text-xs text-slate-500">Creator deposit + active stakes</p>
              </div>
              <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                <p className="font-semibold text-slate-200">Accepted channels</p>
                <p className="mt-2 text-slate-100">{inquiry.initiations.filter((init) => init.status === "accepted" || init.status === "worthy").length}</p>
                <p className="text-xs text-slate-500">Encrypted session count</p>
              </div>
              <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                <p className="font-semibold text-slate-200">Treasury penalties</p>
                <p className="mt-2 text-slate-100">
                  {inquiry.initiations
                    .reduce((total, init) => total + (init.treasuryCut ?? 0), 0)
                    .toFixed(3)} WETH
                </p>
                <p className="text-xs text-slate-500">Routed to 0xa7ac...e959</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">Recent initiations</p>
              <div className="space-y-3">
                {inquiry.initiations.slice(-3).reverse().map((init) => (
                  <div key={init.id} className="flex items-center justify-between rounded border border-slate-800/60 bg-slate-950/60 px-4 py-3">
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

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => initiateInquiry(inquiry.id)}
                disabled={wallet.role !== "researcher"}
                className="inline-flex items-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 text-sm font-medium text-soma-teal transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
              >
                <Coins className="h-4 w-4" />
                Initiate (mock)
              </button>
              <Link
                to={`/inquiry/${inquiry.id}`}
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-slate-100"
              >
                Inspect inquiry
                <Sparkles className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {queue.length === 0 ? (
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 text-center text-sm text-slate-400">
          <Lock className="mx-auto h-6 w-6 text-slate-600" />
          <p className="mt-3">All inquiries have settled. Check back after the next intake cycle.</p>
        </div>
      ) : null}
    </div>
  );
};