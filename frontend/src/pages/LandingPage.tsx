import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, GitBranch } from "lucide-react";
import { useMockData } from "../context/MockDataContext";

const heroPoints = [
  {
    title: "On-chain escrow with inverse-weighted payouts",
    description: "Visualize total incentives, penalty splits, and treasury routes across the inquiry lifecycle."
  },
  {
    title: "Encrypted research channels",
    description: "Spin up secure drawers the moment an initiation is accepted and track requests to closure."
  },
  {
    title: "Researcher queue intelligence",
    description: "Preview initiation requirements, acceptance odds, and penalty math before committing WETH."
  }
];

export const LandingPage = () => {
  const { inquiries, wallet } = useMockData();
  const activeInquiries = inquiries.filter((inq) => inq.status !== "completed").slice(0, 3);
  const isCreator = wallet.role === "creator";
  const roleLabel = isCreator ? "Creator view" : wallet.role === "researcher" ? "Researcher view" : "Viewer mode";

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-glow before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(34,225,255,0.18),transparent_55%)]">
        <div className="relative z-10 grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-soma-teal/40 bg-slate-900/60 px-3 py-1 text-xs font-mono uppercase tracking-wide text-soma-teal">
                Base Sepolia // chainId 84532
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300">
                {roleLabel}
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
              Coordinate high-trust research inquiries with treasury-grade clarity.
            </h1>
            <p className="max-w-2xl text-slate-300">
              {isCreator
                ? "Soma Inquiry pairs deterministic on-chain staking with encrypted knowledge exchange. Draft an inquiry, monitor initiations, and walk through completion states in one place."
                : "Soma Inquiry highlights which opportunities are ready for researcher initiations, their stake requirements, and how penalties recycle through the treasury."}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {isCreator ? (
                <>
                  <Link
                    to="/intake"
                    className="inline-flex items-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 font-medium text-soma-lime transition hover:bg-slate-800"
                  >
                    Launch intake flow
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/researcher/queue"
                    className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal"
                  >
                    Browse researcher queue
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/researcher/queue"
                    className="inline-flex items-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 font-medium text-soma-teal transition hover:bg-slate-800"
                  >
                    Explore open inquiries
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/intake"
                    className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-soma-lime/60 hover:text-soma-lime"
                  >
                    View creator flow
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="h-4 w-4 text-soma-lime" />
              Protocol snapshot
            </div>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Escrow vault</dt>
                <dd className="font-mono text-slate-200">0xdFC3...00C3</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Token</dt>
                <dd className="font-mono text-slate-200">WETH · 18 decimals</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Init ratio</dt>
                <dd className="text-slate-200">10% required per researcher (floor rounded)</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Penalty split</dt>
                <dd className="text-slate-200">50% Treasury · 50% Inquiry pool</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {heroPoints.map((point) => (
          <div key={point.title} className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-6">
            <Sparkles className="h-5 w-5 text-soma-teal" />
            <h2 className="mt-4 text-lg font-semibold text-slate-100">{point.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{point.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Live inquiries</h2>
            <p className="text-sm text-slate-400">Mocked from Base Sepolia emissions for a hackathon-ready walkthrough.</p>
          </div>
          <Link
            to="/researcher/queue"
            className="inline-flex items-center gap-2 text-sm text-soma-teal hover:text-soma-lime"
          >
            View queue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {activeInquiries.map((inq) => (
            <Link
              to={`/inquiry/${inq.id}`}
              key={inq.id}
              className="group rounded-xl border border-slate-800/70 bg-slate-950/70 p-5 transition hover:border-soma-teal/60"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">#{inq.id}</span>
                <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[11px] uppercase tracking-wide">
                  {inq.status === "created" ? "Draft" : "Active"}
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-100 group-hover:text-soma-teal">
                {inq.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-400">{inq.goal}</p>
              <dl className="mt-4 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <dt>Total incentive</dt>
                  <dd className="font-mono text-slate-200">{inq.totalIncentive.toFixed(3)} WETH</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Next initiation</dt>
                  <dd className="font-mono text-slate-200">{inq.nextRequired.toFixed(3)} WETH</dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
        <div className="flex flex-wrap items-center gap-3 text-slate-400">
          <GitBranch className="h-4 w-4 text-soma-teal" />
          Inquiry lifecycle
        </div>
        <ol className="mt-5 grid gap-4 text-sm text-slate-300 lg:grid-cols-5">
          <li className="rounded border border-slate-800/60 bg-slate-950/70 p-4">
            <span className="font-mono text-[11px] uppercase text-slate-500">01</span>
            <h3 className="mt-2 font-semibold text-slate-100">Creator intake</h3>
            <p className="mt-2 text-slate-400">Validate wallet, wrap WETH, broadcast hint + deposit.</p>
          </li>
          <li className="rounded border border-slate-800/60 bg-slate-950/70 p-4">
            <span className="font-mono text-[11px] uppercase text-slate-500">02</span>
            <h3 className="mt-2 font-semibold text-slate-100">Researcher initiations</h3>
            <p className="mt-2 text-slate-400">Queue surfaces required stake and acceptance velocity.</p>
          </li>
          <li className="rounded border border-slate-800/60 bg-slate-950/70 p-4">
            <span className="font-mono text-[11px] uppercase text-slate-500">03</span>
            <h3 className="mt-2 font-semibold text-slate-100">Secure collaboration</h3>
            <p className="mt-2 text-slate-400">Encrypted drawer unlocks to exchange files and requests.</p>
          </li>
          <li className="rounded border border-slate-800/60 bg-slate-950/70 p-4">
            <span className="font-mono text-[11px] uppercase text-slate-500">04</span>
            <h3 className="mt-2 font-semibold text-slate-100">Worthy tagging</h3>
            <p className="mt-2 text-slate-400">Mark initiations worthy or unworthy with automated refunds.</p>
          </li>
          <li className="rounded border border-slate-800/60 bg-slate-950/70 p-4">
            <span className="font-mono text-[11px] uppercase text-slate-500">05</span>
            <h3 className="mt-2 font-semibold text-slate-100">Payout & treasury</h3>
            <p className="mt-2 text-slate-400">Creator cut + research pot distributed, penalties logged.</p>
          </li>
        </ol>
      </section>
    </div>
  );
};