import { FormEvent, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, ArrowLeft, ArrowRight, Lock, Shield, Zap } from "lucide-react";
import { useMockData } from "../context/MockDataContext";
import { cn } from "../lib/utils";

const steps = [
  { key: "wallet", label: "Wallet prep" },
  { key: "brief", label: "Inquiry brief" },
  { key: "review", label: "Review & simulate" }
];

export const CreateInquiryPage = () => {
  const navigate = useNavigate();
  const { wallet, wrapEth, createInquiry } = useMockData();
  const isCreator = wallet.role === "creator";
  const [stepIndex, setStepIndex] = useState(0);
  const [formState, setFormState] = useState({
    title: "",
    goal: "",
    traits: "Long COVID, Biomarkers, Privacy",
    safety: "Only share encrypted PHI. Hash all uploads before referencing on-chain.",
    deposit: 0.01,
    hint: "keccak256:0xfeed..."
  });

  const parsedTraits = useMemo(
    () => formState.traits.split(",").map((tag) => tag.trim()).filter(Boolean),
    [formState.traits]
  );
  const canContinue = useMemo(() => {
    if (stepIndex === 0) {
      return wallet.wethBalance >= formState.deposit;
    }
    if (stepIndex === 1) {
      return formState.title.length > 4 && formState.goal.length > 10 && parsedTraits.length > 0;
    }
    return true;
  }, [formState.deposit, formState.goal.length, formState.title.length, parsedTraits.length, stepIndex, wallet.wethBalance]);

  const goNext = () => {
    if (!isCreator) return;
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const goPrev = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isCreator) return;
    const created = createInquiry({
      title: formState.title,
      goal: formState.goal,
      traits: parsedTraits,
      safetyNotes: formState.safety,
      deposit: formState.deposit,
      publicHint: formState.hint
    });
    navigate(`/inquiry/${created.id}`);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200">
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="mt-4 text-2xl font-semibold text-slate-100">Creator intake</h1>
          <p className="mt-2 text-sm text-slate-400">
            Simulate the Base Sepolia flow of locking WETH, broadcasting a hint, and monitoring treasury splits.
          </p>
        </div>
        <div className="hidden rounded-xl border border-slate-800/70 bg-slate-900/60 p-4 text-xs text-slate-400 sm:block">
          <p className="font-semibold text-slate-200">Wallet posture</p>
          <ul className="mt-2 space-y-1.5 font-mono">
            <li>{wallet.address}</li>
            <li>Balance: {wallet.wethBalance.toFixed(3)} WETH</li>
            <li>Network: {wallet.networkLabel}</li>
          </ul>
        </div>
      </header>

      {!isCreator && (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Researcher view is read-only. Switch to the Creator role via the header toggle to draft an inquiry.</span>
          </div>
        </div>
      )}

      <ol className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-500">
        {steps.map((step, index) => (
          <li
            key={step.key}
            className={`flex items-center gap-2 rounded-full border px-3 py-1 ${
              index === stepIndex
                ? "border-soma-lime/60 bg-slate-900 text-soma-lime"
                : index < stepIndex
                ? "border-soma-teal/40 bg-slate-900/60 text-soma-teal"
                : "border-slate-800/60 bg-slate-900/40"
            }`}
          >
            <span className="font-mono">0{index + 1}</span>
            {step.label}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-6">
          {stepIndex === 0 && (
            <section className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-slate-100">Prep wallet</h2>
              <p className="mt-2 text-sm text-slate-400">
                Wrap ETH into WETH and approve the EscrowVault before staking. This sandbox mocks the flow so you can iterate on copy and timing.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-slate-300 md:grid-cols-2">
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-slate-200">Balances</h3>
                  <p className="mt-3 font-mono text-slate-300">{wallet.ethBalance.toFixed(3)} ETH</p>
                  <p className="font-mono text-slate-500">{wallet.wethBalance.toFixed(3)} WETH</p>
                </div>
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-slate-200">EscrowVault approval</h3>
                  <p className="mt-2 text-xs text-slate-400">
                    Simulated allowance: unlimited WETH to 0xdFC3...00C3
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded border border-slate-700 px-3 py-1 text-xs text-slate-300">
                    <Lock className="h-3.5 w-3.5 text-soma-teal" />
                    Ready
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-end gap-3 text-sm">
                <label className="flex flex-col text-slate-300">
                  Wrap amount (ETH)
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    className="mt-1 rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
                    value={0.15}
                    readOnly
                  />
                </label>
                <button
                  type="button"
                  onClick={() => isCreator && wrapEth(0.15)}
                  disabled={!isCreator}
                  className="inline-flex items-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 font-medium text-soma-teal transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
                >
                  Wrap via demo task
                  <Zap className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-500">Mocks Hardhat task `wrap --amount 0.15`.</p>
              </div>
            </section>
          )}

          {stepIndex === 1 && (
            <section className="space-y-5 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-slate-100">Inquiry brief</h2>
              <label className="block text-sm text-slate-300">
                Title
                <input
                  type="text"
                  value={formState.title}
                  readOnly={!isCreator}
                  onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
                  placeholder="e.g. Long COVID metabolome drift"
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 disabled:opacity-60"
                  required
                />
              </label>
              <label className="block text-sm text-slate-300">
                Goal
                <textarea
                  value={formState.goal}
                  readOnly={!isCreator}
                  onChange={(event) => setFormState((prev) => ({ ...prev, goal: event.target.value }))}
                  rows={4}
                  placeholder="Outline the objective, deliverables, and expected outcome."
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 disabled:opacity-60"
                  required
                />
              </label>
              <label className="block text-sm text-slate-300">
                Traits (comma separated)
                <input
                  type="text"
                  value={formState.traits}
                  readOnly={!isCreator}
                  onChange={(event) => setFormState((prev) => ({ ...prev, traits: event.target.value }))}
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 disabled:opacity-60"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Safety notes
                <textarea
                  value={formState.safety}
                  readOnly={!isCreator}
                  onChange={(event) => setFormState((prev) => ({ ...prev, safety: event.target.value }))}
                  rows={3}
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 disabled:opacity-60"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Public hint (bytes32 hash)
                <input
                  type="text"
                  value={formState.hint}
                  readOnly={!isCreator}
                  onChange={(event) => setFormState((prev) => ({ ...prev, hint: event.target.value }))}
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 font-mono text-xs text-slate-100 disabled:opacity-60"
                />
              </label>
              <label className="block text-sm text-slate-300">
                Deposit (WETH)
                <input
                  type="number"
                  min="0.01"
                  step="0.001"
                  value={formState.deposit}
                  readOnly={!isCreator}
                  onChange={(event) => setFormState((prev) => ({ ...prev, deposit: Number(event.target.value) }))}
                  className="mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 disabled:opacity-60"
                />
                <p className="mt-1 text-xs text-slate-500">Recommended demo deposit: 0.01 WETH</p>
              </label>
            </section>
          )}

          {stepIndex === 2 && (
            <section className="space-y-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
              <h2 className="text-lg font-semibold text-slate-100">Review</h2>
              <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-200">{formState.title || "Title pending"}</p>
                <p className="mt-2 text-slate-400">{formState.goal || "Add research objective"}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {parsedTraits.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                  <h3 className="flex items-center gap-2 font-semibold text-slate-200">
                    <Shield className="h-4 w-4 text-soma-teal" />
                    Safety posture
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">{formState.safety}</p>
                </div>
                <div className="rounded-xl border border-slate-800/60 bg-slate-950/70 p-4">
                  <h3 className="font-semibold text-slate-200">Deposit summary</h3>
                  <dl className="mt-3 space-y-1 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <dt>Creator deposit</dt>
                      <dd className="font-mono text-slate-200">{formState.deposit.toFixed(3)} WETH</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Estimated next initiation</dt>
                      <dd className="font-mono text-slate-200">{(formState.deposit * 0.11).toFixed(3)} WETH</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/80 p-6 text-sm text-slate-300">
            <h2 className="flex items-center gap-2 text-base font-semibold text-slate-100">
              <Shield className="h-4 w-4 text-soma-lime" />
              Status rail
            </h2>
            <ul className="mt-4 space-y-3">
              <li className={`${stepIndex >= 0 ? "text-soma-lime" : "text-slate-500"}`}>
                <span className="font-mono text-xs">Created</span>
                <p className="text-slate-400">Lock creator deposit, emit hint.</p>
              </li>
              <li className={`${stepIndex >= 1 ? "text-soma-lime" : "text-slate-500"}`}>
                <span className="font-mono text-xs">Initiated</span>
                <p className="text-slate-400">Researchers stake sequential WETH.</p>
              </li>
              <li className={`${stepIndex >= 2 ? "text-soma-lime" : "text-slate-500"}`}>
                <span className="font-mono text-xs">Accepted</span>
                <p className="text-slate-400">Secure channel opens for data sharing.</p>
              </li>
              <li className="text-slate-500">
                <span className="font-mono text-xs">Worthy</span>
                <p className="text-slate-400">Mark contributions for payout weight.</p>
              </li>
              <li className="text-slate-500">
                <span className="font-mono text-xs">Completed</span>
                <p className="text-slate-400">Creator cut + research pot disbursed.</p>
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
              {stepIndex < steps.length - 1 && (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!isCreator || !canContinue}
                  className="inline-flex items-center justify-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 font-medium text-soma-teal transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
              {stepIndex === steps.length - 1 && (
                <button
                  type="submit"
                  disabled={!isCreator}
                  className="inline-flex items-center justify-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 font-medium text-soma-lime transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500"
                >
                  Simulate createInquiry
                </button>
              )}
              <p className="text-xs text-slate-500">
                This prototype signs mock transactions and feeds explorer links for BaseScan without touching live contracts.
              </p>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
};