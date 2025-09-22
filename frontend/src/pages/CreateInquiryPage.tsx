import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

import { useMockData } from "../context/MockDataContext";
import { cn } from "../lib/utils";

const STEPS = [
  { key: "focus", label: "Incentivise research" },
  { key: "review", label: "Review" }
];

const QUESTION_TYPES = [
  {
    id: "peptide-variant",
    label: "Peptide signature vs rare variant",
    blurb: "Cross-check peptide abundance shifts against a specific variant of interest."
  },
  {
    id: "longitudinal-response",
    label: "Therapeutic response timeline",
    blurb: "Map peptide changes over time to assess how a therapy modulates your genomics."
  },
  {
    id: "immune-landscape",
    label: "Immune landscape reconstruction",
    blurb: "Rebuild immune pathways from peptide readouts to inform clinical decisions."
  }
];

export const CreateInquiryPage = () => {
  const navigate = useNavigate();
  const { wallet, createInquiry } = useMockData();
  const [stepIndex, setStepIndex] = useState(0);
  const [formState, setFormState] = useState({
    questionType: QUESTION_TYPES[0].id,
    publicSummary: "Peptide anomalies following mitochondrial therapy—need correlation to mtDNA variants.",
    dataHash: "bafybeigdyrrarevariantrefs",
    deposit: 0.01
  });

  const selectedTemplate = QUESTION_TYPES.find((item) => item.id === formState.questionType) ?? QUESTION_TYPES[0];
  const canContinue = useMemo(() => {
    if (stepIndex === 0) {
      return formState.publicSummary.trim().length > 10;
    }
    return true;
  }, [formState.publicSummary, stepIndex]);

  const goNext = () => setStepIndex((prev) => Math.min(prev + 1, STEPS.length - 1));
  const goPrev = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const inquiry = createInquiry({
      title: selectedTemplate.label,
      goal: formState.publicSummary,
      traits: [selectedTemplate.label],
      safetyNotes: formState.dataHash ? `Data hash: ${formState.dataHash}` : "",
      deposit: formState.deposit,
      publicHint: formState.publicSummary
    });
    navigate(`/user/inquiries/${inquiry.id}`);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="mt-4 text-2xl font-semibold text-slate-100">Create inquiry</h1>
          <p className="mt-2 text-sm text-slate-400">
            Choose the research focus, share what peptides reveal, and deposit WETH to incentivise work.
          </p>
        </div>
      </header>

      <ol className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-500">
        {STEPS.map((step, index) => (
          <li
            key={step.key}
            className={cn(
              "flex items-center gap-2 rounded-full border px-3 py-1",
              index === stepIndex
                ? "border-soma-lime/60 bg-slate-900 text-soma-lime"
                : index < stepIndex
                ? "border-soma-teal/40 bg-slate-900/60 text-soma-teal"
                : "border-slate-800/60 bg-slate-900/40"
            )}
          >
            <span className="font-mono">0{index + 1}</span>
            {step.label}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          {stepIndex === 0 && (
            <section className="space-y-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-100">Incentivise research</h2>
                <p className="text-sm text-slate-400">
                  Select the question type that best matches the peptide story you want investigated. Add the
                  encrypted data hash so you can prove what you&apos;re willing to release.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">Research question types</p>
                <div className="space-y-3">
                  {QUESTION_TYPES.map((item) => {
                    const active = item.id === formState.questionType;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormState((prev) => ({ ...prev, questionType: item.id }))}
                        className={cn(
                          "w-full rounded-xl border px-4 py-3 text-left transition",
                          active
                            ? "border-soma-teal/60 bg-slate-950/80 text-slate-100"
                            : "border-slate-800/60 bg-slate-950/40 text-slate-300 hover:border-slate-700"
                        )}
                      >
                        <p className="font-medium text-slate-100">{item.label}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.blurb}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <label className="block text-sm text-slate-300">
                Public summary
                <textarea
                  value={formState.publicSummary}
                  onChange={(event) => setFormState((prev) => ({ ...prev, publicSummary: event.target.value }))}
                  rows={5}
                  placeholder="Explain the peptide signal or mutation you want researchers to focus on."
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                  required
                />
              </label>

              <label className="block text-sm text-slate-300">
                Data hash (optional)
                <input
                  type="text"
                  value={formState.dataHash}
                  onChange={(event) => setFormState((prev) => ({ ...prev, dataHash: event.target.value }))}
                  placeholder="cid:... or keccak256 hash of encrypted files"
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 font-mono text-xs text-slate-100"
                />
              </label>

              <label className="block text-sm text-slate-300">
                Deposit (WETH)
                <input
                  type="number"
                  min="0.01"
                  step="0.001"
                  value={formState.deposit}
                  onChange={(event) => setFormState((prev) => ({ ...prev, deposit: Number(event.target.value) }))}
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                />
                <p className="mt-1 text-xs text-slate-500">Deposit stays in escrow until you mark work complete.</p>
              </label>
            </section>
          )}

          {stepIndex === 1 && (
            <section className="space-y-5 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-slate-100">Review</h2>
              <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-200">{selectedTemplate.label}</p>
                <p className="mt-2 text-slate-400">{formState.publicSummary || "Add a public summary"}</p>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Data hash</p>
                  <p className="mt-2 font-mono text-xs text-slate-200">
                    {formState.dataHash ? formState.dataHash : "No hash provided"}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Deposit</p>
                  <p className="mt-2 font-mono text-lg text-slate-100">{formState.deposit.toFixed(3)} WETH</p>
                  <p className="mt-1 text-xs text-slate-500">Next initiation estimate {Math.max(formState.deposit * 0.11, 0.015).toFixed(3)} WETH</p>
                </div>
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/80 p-6 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-100">Status</h2>
            <ul className="mt-4 space-y-3">
              <li className="text-soma-lime">
                <span className="font-mono text-xs">Create</span>
                <p className="text-slate-400">Draft inquiry and deposit funds.</p>
              </li>
              <li className="text-slate-500">
                <span className="font-mono text-xs">Encrypted channel</span>
                <p className="text-slate-400">Unlock secure comms once a researcher is accepted.</p>
              </li>
              <li className="text-slate-500">
                <span className="font-mono text-xs">Completion</span>
                <p className="text-slate-400">Mark worthy outcomes, release payouts.</p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/80 p-6 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-100">Action</h2>
            <div className="mt-4 flex flex-col gap-3">
              {stepIndex > 0 && (
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex items-center justify-center gap-2 rounded border border-slate-700 px-4 py-2 text-slate-300 transition hover:text-slate-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              )}
              {stepIndex < STEPS.length - 1 && (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canContinue}
                  className="inline-flex items-center justify-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 font-medium text-soma-teal transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
              {stepIndex === STEPS.length - 1 && (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 font-medium text-soma-lime transition hover:bg-slate-800"
                >
                  Mock submit
                </button>
              )}
              <p className="flex items-start gap-2 text-xs text-slate-500">
                <Info className="mt-0.5 h-3.5 w-3.5 text-soma-teal" />
                Deposits and payouts are simulated in this prototype; no chain calls occur yet.
              </p>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
};
