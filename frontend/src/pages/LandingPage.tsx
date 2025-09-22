import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { LatestInquiriesFeed } from "../components/LatestInquiriesFeed";

export const LandingPage = () => {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-glow before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(34,225,255,0.12),transparent_60%)]">
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-mono uppercase tracking-wide text-slate-300">
            SOMA // DeSci // Peptides // Genomics
          </span>
          <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Genomics related research questions</h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Soma stages genomics-driven research questions with incentives while keeping sensitive data
            encrypted. Peptide insights guide collaboration, on-chain incentives settle once the work is
            complete and deemed worthy.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <button
              type="button"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 font-medium text-soma-lime/70"
              disabled
            >
              Register with MetaMask (coming soon)
            </button>
            <Link
              to="/user"
              className="inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal"
            >
              Visit user portal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/80 via-transparent" aria-hidden />
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-slate-500">Peptides & you</p>
          <h2 className="text-xl font-semibold text-slate-100">Why peptides drive the protocol</h2>
          <p className="text-sm text-slate-300">
            Your peptide signatures can reveal how prior treatments interact with your current genomics.
            Soma maps those changes to tailored research questions so you can incentivise the exact
            expertise you need—without exposing raw files until you choose to share them. Researchers on
            the platform build credibility by repeatedly answering specific peptide-focused inquiries, so
            you can quickly spot specialists whose expertise aligns with your data.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wide text-slate-500">Genomic alignment</p>
          <p className="text-sm text-slate-300">
            Each inquiry stores a public summary for researchers while the full datasets remain locked in
            an encrypted channel. When the work concludes, payouts settle on-chain and you retain a
            ledger of which peptides or variants guided the collaboration.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">Protocol pulse</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-100">Latest inquiry events</h2>
        <p className="mt-2 text-sm text-slate-400">
          Follow the most recent activity across Soma inquiries to understand where incentives, penalties, and
          encrypted channels are moving in real time.
        </p>
        <div className="mt-5">
          <LatestInquiriesFeed />
        </div>
      </section>
    </div>
  );
};
