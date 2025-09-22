import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  FileCode,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { useMockData } from "../context/MockDataContext";
import { Initiation, SecureRequest } from "../lib/types";

const statusRail = [
  { key: "created", label: "Created" },
  { key: "completed", label: "Completed" }
];

const requestTemplates: Array<{ id: string; label: string; detail: string; status: SecureRequest["status"] }> = [
  {
    id: "template-0",
    label: "Request encrypted dataset",
    detail: "Share the encrypted archive referenced by your data hash.",
    status: "requested",
    updatedAt: new Date().toISOString()
  },
  {
    id: "template-1",
    label: "Confirm peptide assay",
    detail: "Clarify assay units and collection protocol to align analysis.",
    status: "requested",
    updatedAt: new Date().toISOString()
  }
];

interface InquiryDetailPageProps {
  persona?: "user" | "researcher";
}

export const InquiryDetailPage = ({ persona = "user" }: InquiryDetailPageProps) => {
  const navigate = useNavigate();
  const { id, initId } = useParams<{ id: string; initId?: string }>();
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
  const [selectedInitiationId, setSelectedInitiationId] = useState<string | undefined>(initId);
  const [messageDraft, setMessageDraft] = useState("");
  const [activityOpen, setActivityOpen] = useState(false);
  const focusInitiationId = initId;

  useEffect(() => {
    if (focusInitiationId && focusInitiationId !== selectedInitiationId) {
      setSelectedInitiationId(focusInitiationId);
      return;
    }

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
  }, [focusInitiationId, inquiry, selectedInitiationId]);

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

  const isUserView = persona === "user";
  const isResearcherView = persona === "researcher";
  const isOwner = wallet.address === inquiry.creator;
  const baseRoute = isResearcherView ? "/researcher" : "/user";
  const canComplete =
    isUserView &&
    isOwner &&
    inquiry.status !== "completed" &&
    inquiry.initiations.some((init) => init.status === "worthy");

  const statusActive = (key: string) => {
    if (key === "created") return true;
    if (key === "completed") return inquiry.status === "completed";
    return false;
  };

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

  const renderActionButtons = (initiation: Initiation) => {
    if (!isUserView || !isOwner || inquiry.status === "completed") {
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
        <div className="flex flex-wrap gap-2">
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
      return <p className="text-xs text-slate-500">Ready for completion</p>;
    }
    return null;
  };

  const fulfilledRequests = (selectedInitiation && inquiry.secureRequests[selectedInitiation.id]) || [];

  const handleTemplateRequest = (template: (typeof requestTemplates)[number]) => {
    if (!selectedInitiation) return;
    addSecureRequest(inquiry.id, selectedInitiation.id, {
      label: template.label,
      detail: template.detail,
      status: template.status
    });
  };

  const renderInitiationCard = (initiation: Initiation) => {
    return (
      <>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-200">
          <div>
            <p className="font-medium text-slate-100">{initiation.ens ?? initiation.researcher}</p>
            <p className="text-xs text-slate-500">{new Date(initiation.updatedAt).toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-slate-400">Stake {initiation.amount.toFixed(3)} WETH</p>
            <p className="text-xs capitalize text-slate-300">{initiation.status}</p>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-400">{renderActionButtons(initiation)}</div>
        {initiation.refund ? (
          <div className="mt-3 grid gap-2 rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-400 sm:grid-cols-3">
            <div>
              <p className="text-slate-500">Refund</p>
              <p className="font-mono text-slate-200">{initiation.refund.toFixed(3)} WETH</p>
            </div>
            <div>
              <p className="text-slate-500">Treasury</p>
              <p className="font-mono text-slate-200">{(initiation.treasuryCut ?? 0).toFixed(3)} WETH</p>
            </div>
            <div>
              <p className="text-slate-500">Pool top up</p>
              <p className="font-mono text-slate-200">{(initiation.poolTopUp ?? 0).toFixed(3)} WETH</p>
            </div>
          </div>
        ) : null}
      </>
    );
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
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-slate-700 px-2 py-1 font-mono">#{inquiry.id}</span>
              <span className="rounded-full border border-slate-700 px-3 py-1 uppercase tracking-wide">
                {persona === "user" ? "User view" : "Researcher view"}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold text-slate-100">{inquiry.publicHint}</h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-300">{inquiry.goal}</p>
          </div>
          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-slate-400">Deposit</p>
              <p className="mt-2 font-mono text-lg">{inquiry.deposit.toFixed(3)} WETH</p>
            </div>
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-slate-400">Incentive pool</p>
              <p className="mt-2 font-mono text-lg">{inquiry.totalIncentive.toFixed(3)} WETH</p>
            </div>
            <div className="rounded-xl border border-slate-800/70 bg-slate-950/70 p-4">
              <p className="text-slate-400">Next stake</p>
              <p className="mt-2 font-mono text-lg">{inquiry.nextRequired.toFixed(3)} WETH</p>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold text-slate-100">Status</h2>
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
              {canComplete ? (
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
              {focusInitiationId
                ? selectedInitiation ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="font-mono">Initiation #{selectedInitiation.id.slice(0, 6)}</span>
                        <Link
                          to={`${baseRoute}/inquiries/${inquiry.id}`}
                          className="text-soma-teal transition hover:text-soma-lime"
                        >
                          Back to inquiry overview
                        </Link>
                      </div>
                      {renderInitiationCard(selectedInitiation)}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-200">
                      Initiation not found. It may have been removed or settled.
                    </div>
                  )
                : inquiry.initiations.map((init) => (
                    <Link
                      key={init.id}
                      to={`${baseRoute}/inquiries/${inquiry.id}/initiations/${init.id}`}
                      className={`block rounded-xl border px-4 py-4 text-left transition ${
                        selectedInitiationId === init.id
                          ? "border-soma-teal/60 bg-slate-950"
                          : "border-slate-800/60 bg-slate-950/50 hover:border-slate-700"
                      }`}
                      onMouseEnter={() => setSelectedInitiationId(init.id)}
                    >
                      {renderInitiationCard(init)}
                    </Link>
                  ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60">
            <button
              type="button"
              onClick={() => setActivityOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-3 px-6 py-4 text-left text-sm font-medium text-slate-200"
            >
              Activity log
              <ChevronDown className={`h-4 w-4 transition ${activityOpen ? "rotate-180" : ""}`} />
            </button>
            {activityOpen ? (
              <ol className="space-y-4 border-t border-slate-800/70 bg-slate-900/40 p-6 text-sm text-slate-300">
                {timeline.map((event) => (
                  <li key={event.id} className="rounded border border-slate-800/60 bg-slate-950/60 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-semibold text-slate-100">{event.label}</p>
                      <span className="font-mono text-xs text-slate-500">{new Date(event.timestamp).toLocaleString()}</span>
                    </div>
                    <p className="mt-2 text-slate-400">{event.description}</p>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
            <h2 className="text-base font-semibold text-slate-100">Data references</h2>
            <p className="mt-2 text-slate-400">
              {inquiry.safetyNotes || "No data hash provided yet."}
            </p>
            {isResearcherView ? (
              <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-soma-teal" />
                Encrypted materials unlock after acceptance.
              </p>
            ) : null}
          </div>

          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
            <div className="flex items-center gap-2 text-slate-200">
              <MessageSquare className="h-4 w-4 text-soma-teal" />
              Encrypted channel
            </div>
            {selectedInitiation ? (
              <div className="mt-4 space-y-4">
                <div className="rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-300">
                  <p className="font-semibold text-slate-100">Channel with {selectedInitiation.ens ?? selectedInitiation.researcher}</p>
                  <p className="mt-1 text-slate-500">{selectedInitiation.channelOpen ? "Channel open" : "Awaiting acceptance"}</p>
                </div>
                <div className="space-y-3">
                  {inquiry.secureChannels[selectedInitiation.id]?.map((message) => (
                    <div key={message.id} className="rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-300">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-slate-100">{message.authorLabel}</span>
                        <span className="font-mono text-[10px] text-slate-500">{new Date(message.timestamp).toLocaleString()}</span>
                      </div>
                      <p className="mt-2 text-slate-400">{message.body}</p>
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

          {selectedInitiation ? (
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300">
              <div className="flex items-center gap-2 text-slate-200">
                <FileCode className="h-4 w-4 text-soma-teal" />
                Requests
              </div>
              <div className="mt-4 space-y-4 text-xs">
                <div className="flex flex-wrap gap-2">
                  {requestTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => handleTemplateRequest(template)}
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
                        {isUserView && isOwner && req.status !== "fulfilled" ? (
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
                    <p className="text-slate-500">No requests logged for this channel.</p>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  );
};
