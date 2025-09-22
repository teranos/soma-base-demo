import { ArrowRight, FilePlus2 } from "lucide-react";
import { Link } from "react-router-dom";

import { useMockData } from "../context/MockDataContext";

export const UserPortalPage = () => {
  const { inquiries, wallet } = useMockData();
  const myInquiries = inquiries.filter((inquiry) => inquiry.creator === wallet.address);

  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-100">User portal</h1>
          <p className="mt-2 text-sm text-slate-400">
            Stage a new Soma inquiry and keep track of the encrypted research you already have in flight.
          </p>
        </div>
        <Link
          to="/user/create"
          className="inline-flex items-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 text-sm font-medium text-soma-lime transition hover:bg-slate-800"
        >
          <FilePlus2 className="h-4 w-4" />
          Create inquiry
        </Link>
      </header>

      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Inquiries</p>
            <h2 className="text-lg font-semibold text-slate-100">Active research inquiries</h2>
          </div>
          <Link
            to="/user/create"
            className="inline-flex items-center gap-2 rounded border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal"
          >
            Start new inquiry
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-5 space-y-4">
          {myInquiries.length === 0 ? (
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-6 text-sm text-slate-400">
              You haven&apos;t created an inquiry yet. Select a research question type to get started.
            </div>
          ) : (
            myInquiries.map((inquiry) => {
              const activeInitiations = inquiry.initiations.filter((init) => init.status === "pending" || init.status === "accepted").length;
              const rejectedInitiations = inquiry.initiations.filter((init) => init.status === "rejected").length;
              const worthyInitiations = inquiry.initiations.filter((init) => init.status === "worthy").length;
              const unworthyInitiations = inquiry.initiations.filter((init) => init.status === "unworthy").length;

              return (
                <Link
                  key={inquiry.id}
                  to={`/user/inquiries/${inquiry.id}`}
                  className="group block rounded-xl border border-slate-800/70 bg-slate-950/70 p-5 transition hover:border-soma-teal/60"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <span className="font-mono">#{inquiry.id}</span>
                    <span className="rounded-full border border-slate-700 px-2 py-0.5 uppercase tracking-wide text-[11px]">
                      {inquiry.status === "completed" ? "Completed" : "Active"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-100 group-hover:text-soma-teal">
                    {inquiry.publicHint}
                  </p>
                  <dl className="mt-4 grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
                    <div>
                      <dt>Deposit</dt>
                      <dd className="font-mono text-slate-200">{inquiry.deposit.toFixed(3)} WETH</dd>
                    </div>
                    <div>
                      <dt>Current pool</dt>
                      <dd className="font-mono text-slate-200">{inquiry.totalIncentive.toFixed(3)} WETH</dd>
                    </div>
                    <div>
                      <dt>Next stake</dt>
                      <dd className="font-mono text-slate-200">{inquiry.nextRequired.toFixed(3)} WETH</dd>
                    </div>
                  </dl>
                  <dl className="mt-4 grid gap-3 text-xs text-slate-400 sm:grid-cols-4">
                    <div>
                      <dt>Active initiations</dt>
                      <dd className="font-mono text-slate-200">{activeInitiations}</dd>
                    </div>
                    <div>
                      <dt>Rejected initiations</dt>
                      <dd className="font-mono text-slate-200">{rejectedInitiations}</dd>
                    </div>
                    <div>
                      <dt>Deemed worthy</dt>
                      <dd className="font-mono text-slate-200">{worthyInitiations}</dd>
                    </div>
                    <div>
                      <dt>Deemed unworthy</dt>
                      <dd className="font-mono text-slate-200">{unworthyInitiations}</dd>
                    </div>
                  </dl>
                </Link>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};
