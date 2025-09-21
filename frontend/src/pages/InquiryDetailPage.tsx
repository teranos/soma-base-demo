import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  FileCode,
  MessageSquare,
  Send,
  ShieldCheck,
  Terminal,
  TimerReset
} from "lucide-react";
import { useMockData } from "../context/MockDataContext";
import { Initiation, SecureRequest } from "../lib/types";

const statusRail = [
  { key: "created", label: "Created" },
  { key: "initiated", label: "Initiated" },
  { key: "accepted", label: "Accepted" },
  { key: "worthy", label: "Worthy" },
  { key: "completed", label: "Completed" }
];

const requestTemplates: Array<{ id: string; label: string; detail: string; status: SecureRequest["status"] }> = [
  {
    id: "template-0",
    label: "Upload raw datasets",
    detail: "Share encrypted archive. Hash required in channel.",
    status: "requested",
    updatedAt: new Date().toISOString()
  },
  {
    id: "template-1",
    label: "Provide consent forms",
    detail: "Mask all direct identifiers before upload.",
    status: "requested",
    updatedAt: new Date().toISOString()
  }
];

export const InquiryDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    inquiries,
    wallet,
    acceptInitiation,
    rejectInitiation,
    markWorthy,
    markUnworthy,
    completeInquiry,
    openSecureChannel,
    addChannelMessage,
    addSecureRequest,
    resolveSecureRequest
  } = useMockData();

  const inquiry = useMemo(() => inquiries.find((item) => item.id === id), [id, inquiries]);
  const [selectedInitiationId, setSelectedInitiationId] = useState<string | undefined>(undefined);
  const [messageDraft, setMessageDraft] = useState("");

  useEffect(() => {
    if (!inquiry) {
      return;
    }
    if (!selectedInitiationId) {
      const preferred = inquiry.initiations.find((init) => init.status === "accepted" || init.status === "worthy")
        ?.id ?? inquiry.initiations[0]?.id;
      setSelectedInitiationId(preferred);
    } else if (!inquiry.initiations.some((init) => init.id === selectedInitiationId)) {
      setSelectedInitiationId(inquiry.initiations[0]?.id);
    }
  }, [inquiry, selectedInitiationId]);

  if (!inquiry) {
    return (
      <div className="space-y-6">
        <button className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 text-center text-sm text-slate-400">
          Inquiry not found.
        </div>
      </div>
    );
  }

  const selectedInitiation = inquiry.initiations.find((init) => init.id === selectedInitiationId);
  const timeline = inquiry.timeline;

  const canComplete = inquiry.status !== "completed" && inquiry.initiations.some((init) => init.status === "worthy");

  const handleSendMessage = (event: FormEvent) => {
    event.preventDefault();
    if (!selectedInitiation || messageDraft.trim().length === 0) {
      return;
    }
    addChannelMessage(inquiry.id, selectedInitiation.id, {
      author: wallet.address,
      authorLabel: wallet.ens ?? wallet.address,
      body: messageDraft.trim(),
      status: "sent"
    });
    setMessageDraft("");
  };

  const fulfilledRequests = (selectedInitiation && inquiry.secureRequests[selectedInitiation.id]) || [];

  const renderActionButtons = (initiation: Initiation) => {
    if (wallet.role !== "creator" || inquiry.status === "completed") {
      return null;
    }
    if (initiation.status === "pending") {
      return (
        <div className="flex gap-2">
          <button
            onClick={() => acceptInitiation(inquiry.id, initiation.id)}
            className="rounded border border-soma-teal/60 px-3 py-1.5 text-xs font-medium text-soma-teal transition hover:bg-slate-900"
          >
            Accept
          </button>
          <button
            onClick={() => rejectInitiation(inquiry.id, initiation.id)}
            className="rounded border border-red-500/60 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-slate-900"
          >
            Reject
          </button>
        </div>
      );
    }
    if (initiation.status === "accepted") {
      return (
        <div className="flex gap-2">
          <button
            onClick={() => openSecureChannel(inquiry.id, initiation.id)}
            className="rounded border border-soma-teal/60 px-3 py-1.5 text-xs text-soma-teal transition hover:bg-slate-900"
          >
            Open channel
          </button>
          <button
            onClick={() => markWorthy(inquiry.id, initiation.id)}
            className="rounded border border-soma-lime/60 px-3 py-1.5 text-xs text-soma-lime transition hover:bg-slate-900"
          >
            Mark worthy
          </button>
          <button
            onClick={() => markUnworthy(inquiry.id, initiation.id)}
            className="rounded border border-amber-500/60 px-3 py-1.5 text-xs text-amber-400 transition hover:bg-slate-900"
          >
            Mark unworthy
          </button>
        </div>
      );
    }
    if (initiation.status === "worthy") {
      return (
        <p className="text-xs text-slate-500">Awaiting completion</p>
      );
    }
    return null;
  };

  const statusActive = (key: string) => {
    if (key === "created") return true;
    if (key === "initiated") return inquiry.initiations.length > 0;
    if (key === "accepted") return inquiry.initiations.some((init) => init.status === "accepted" || init.status === "worthy");
    if (key === "worthy") return inquiry.initiations.some((init) => init.status === "worthy");
    if (key === "completed") return inquiry.status === "completed";
    return false;
  };

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <button className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-slate-700 px-2 py-1 text-xs font-mono">#{inquiry.id}</span>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-wide text-slate-400">
                {inquiry.status === "completed" ? "Completed" : "Active"}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold text-slate-100">{inquiry.title}</h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">{inquiry.goal}</p>
          </div>
          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-slate-400">Creator deposit</p>
              <p className="mt-2 font-mono text-lg">{inquiry.deposit.toFixed(3)} WETH</p>
            </div>
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-slate-400">Total incentive</p>
              <p className="mt-2 font-mono text-lg">{inquiry.totalIncentive.toFixed(3)} WETH</p>
            </div>
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-slate-400">Next initiation</p>
              <p className="mt-2 font-mono text-lg">{inquiry.nextRequired.toFixed(3)} WETH</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {inquiry.traits.map((trait) => (
            <span key={trait} className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">
              {trait}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-slate-100">Status rail</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {statusRail.map((step) => (
                <div
                  key={step.key}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${
                    statusActive(step.key)
                      ? "border-soma-teal/60 text-soma-teal"
                      : "border-slate-800/60 text-slate-500"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {step.label}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-100">Initiations</h2>
              {canComplete && wallet.role === "creator" ? (
                <button
                  onClick={() => completeInquiry(inquiry.id)}
                  className="inline-flex items-center gap-2 rounded border border-soma-lime/60 px-3 py-1.5 text-xs font-medium text-soma-lime transition hover:bg-slate-900"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Complete inquiry
                </button>
              ) : null}
            </div>
            <div className="mt-4 space-y-3">
              {inquiry.initiations.map((init) => (
                <button
                  key={init.id}
                  onClick={() => setSelectedInitiationId(init.id)}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                    selectedInitiationId === init.id ? "border-soma-teal/60 bg-slate-950" : "border-slate-800/60 bg-slate-950/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-200">
                    <div>
                      <p className="font-medium text-slate-100">{init.ens ?? init.researcher}</p>
                      <p className="text-xs text-slate-500">{new Date(init.updatedAt).toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-slate-400">Stake {init.amount.toFixed(3)} WETH</p>
                      <p className="text-xs capitalize text-slate-300">{init.status}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">
                    {renderActionButtons(init)}
                  </div>
                  {init.refund ? (
                    <div className="mt-3 grid gap-2 rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-400 sm:grid-cols-3">
                      <div>
                        <p className="text-slate-500">Refund</p>
                        <p className="font-mono text-slate-200">{init.refund.toFixed(3)} WETH</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Treasury</p>
                        <p className="font-mono text-slate-200">{(init.treasuryCut ?? 0).toFixed(3)} WETH</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Pool top up</p>
                        <p className="font-mono text-slate-200">{(init.poolTopUp ?? 0).toFixed(3)} WETH</p>
                      </div>
                    </div>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-slate-100">Activity log</h2>
            <ol className="mt-4 space-y-4 text-sm text-slate-300">
              {timeline.map((event) => (
                <li key={event.id} className="rounded border border-slate-800/60 bg-slate-950/60 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-semibold text-slate-100">{event.label}</p>
                    <p className="text-xs text-slate-500">{new Date(event.timestamp).toLocaleString()}</p>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{event.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <div className="flex items-center gap-2 text-slate-400">
              <MessageSquare className="h-4 w-4 text-soma-teal" />
              Secure channel
            </div>
            {selectedInitiation ? (
              <div className="mt-4 space-y-4">
                <div className="rounded border border-slate-800/60 bg-slate-950/60 p-3 text-xs text-slate-400">
                  <p className="font-semibold text-slate-200">{selectedInitiation.ens ?? selectedInitiation.researcher}</p>
                  <p>Status: {selectedInitiation.status}</p>
                </div>
                <div className="max-h-72 space-y-3 overflow-y-auto rounded border border-slate-800/60 bg-slate-950/60 p-3 text-xs text-slate-300">
                  {(inquiry.secureChannels[selectedInitiation.id] ?? []).map((message) => (
                    <div key={message.id}>
                      <p className="font-semibold text-slate-200">{message.authorLabel}</p>
                      <p className="mt-1 text-slate-300">{message.body}</p>
                      <p className="mt-1 text-[10px] text-slate-500">{new Date(message.timestamp).toLocaleString()}</p>
                    </div>
                  ))}
                  {inquiry.secureChannels[selectedInitiation.id]?.length ? null : (
                    <p className="text-slate-500">No encrypted exchanges yet.</p>
                  )}
                </div>
                <form onSubmit={handleSendMessage} className="space-y-2">
                  <textarea
                    value={messageDraft}
                    onChange={(event) => setMessageDraft(event.target.value)}
                    placeholder="Share update or request"
                    rows={3}
                    className="w-full rounded border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded border border-soma-teal/60 px-3 py-2 text-xs font-medium text-soma-teal transition hover:bg-slate-900"
                  >
                    <Send className="h-4 w-4" />
                    Send encrypted note
                  </button>
                </form>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-400">Select an initiation to open its secure channel.</p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <div className="flex items-center gap-2 text-slate-400">
              <FileCode className="h-4 w-4 text-soma-teal" />
              Requests
            </div>
            {selectedInitiation ? (
              <div className="mt-4 space-y-4 text-xs text-slate-300">
                <div className="flex flex-wrap gap-2">
                  {requestTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() =>
                      addSecureRequest(inquiry.id, selectedInitiation.id, {
                        label: template.label,
                        detail: template.detail,
                        status: template.status
                      })
                    }
                      type="button"
                      className="rounded border border-slate-700 px-3 py-1 text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal"
                    >
                      + {template.label}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  {fulfilledRequests.length ? (
                    fulfilledRequests.map((req) => (
                      <div key={req.id} className="rounded border border-slate-800/60 bg-slate-950/60 p-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-semibold text-slate-100">{req.label}</p>
                          <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase text-slate-500">
                            {req.status}
                          </span>
                        </div>
                        <p className="mt-2 text-slate-400">{req.detail}</p>
                        <p className="mt-2 text-[10px] text-slate-500">Updated {new Date(req.updatedAt).toLocaleString()}</p>
                        {wallet.role === "creator" && req.status !== "fulfilled" ? (
                          <button
                            onClick={() => resolveSecureRequest(inquiry.id, selectedInitiation.id, req.id)}
                            className="mt-2 inline-flex items-center gap-2 rounded border border-soma-lime/60 px-3 py-1 text-soma-lime transition hover:bg-slate-900"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Mark fulfilled
                          </button>
                        ) : null}
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">No active requests.</p>
                  )}
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-400">Choose an initiation to manage requests.</p>
            )}
          </div>

          {inquiry.completionSummary ? (
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="h-4 w-4 text-soma-teal" />
                Completion snapshot
              </div>
              <dl className="mt-4 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <dt>Creator cut</dt>
                  <dd className="font-mono text-slate-200">{inquiry.completionSummary.userCut.toFixed(3)} WETH</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Research pot</dt>
                  <dd className="font-mono text-slate-200">{inquiry.completionSummary.researchPot.toFixed(3)} WETH</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Worthy researchers</dt>
                  <dd className="text-slate-200">{inquiry.completionSummary.worthyCount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tx hash</dt>
                  <dd className="font-mono text-slate-200">{inquiry.completionSummary.txHash}</dd>
                </div>
              </dl>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <TimerReset className="h-4 w-4 text-slate-500" />
                Awaiting completion
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Mark at least one accepted initiation as worthy to enable final settlement. Treasury penalties update automatically as you reject or mark unworthy contributors.
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-amber-500/40 bg-amber-500/5 p-5 text-xs text-amber-200">
            <div className="flex items-center gap-2 text-amber-300">
              <AlertTriangle className="h-4 w-4" />
              Safety note
            </div>
            <p className="mt-3 text-amber-200/80">{inquiry.safetyNotes}</p>
          </div>
        </aside>
      </section>
    </div>
  );
};
