import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { inquiriesSeed, demoWallet } from "../data/mockData";
import {
  ChatMessage,
  Inquiry,
  Initiation,
  SecureRequest,
  WalletRole,
  WalletState
} from "../lib/types";
import { useToastContext } from "./ToastContext";

interface CreateInquiryInput {
  title: string;
  goal: string;
  traits: string[];
  safetyNotes: string;
  deposit: number;
  publicHint: string;
}

interface MockDataContextValue {
  wallet: WalletState;
  inquiries: Inquiry[];
  researchers: { address: string; ens?: string }[];
  setRole: (role: WalletRole) => void;
  wrapEth: (amount: number) => void;
  initiateInquiry: (inquiryId: string) => void;
  createInquiry: (input: CreateInquiryInput) => Inquiry;
  acceptInitiation: (inquiryId: string, initiationId: string) => void;
  rejectInitiation: (inquiryId: string, initiationId: string) => void;
  markWorthy: (inquiryId: string, initiationId: string) => void;
  markUnworthy: (inquiryId: string, initiationId: string) => void;
  completeInquiry: (inquiryId: string) => void;
  openSecureChannel: (inquiryId: string, initiationId: string) => void;
  addChannelMessage: (
    inquiryId: string,
    initiationId: string,
    message: Omit<ChatMessage, "id" | "timestamp">
  ) => void;
  addSecureRequest: (
    inquiryId: string,
    initiationId: string,
    request: Omit<SecureRequest, "id" | "updatedAt">
  ) => void;
  resolveSecureRequest: (inquiryId: string, initiationId: string, requestId: string) => void;
}

const MockDataContext = createContext<MockDataContextValue | undefined>(undefined);

const copyInquiry = (inquiry: Inquiry): Inquiry => ({
  ...inquiry,
  initiations: inquiry.initiations.map((init) => ({ ...init })),
  timeline: inquiry.timeline.map((event) => ({ ...event })),
  secureChannels: Object.fromEntries(
    Object.entries(inquiry.secureChannels).map(([key, value]) => [key, value.map((msg) => ({ ...msg }))])
  ),
  secureRequests: Object.fromEntries(
    Object.entries(inquiry.secureRequests).map(([key, value]) => [key, value.map((req) => ({ ...req }))])
  ),
  completionSummary: inquiry.completionSummary ? { ...inquiry.completionSummary } : undefined
});

const formatTimestamp = () => new Date().toISOString();

const computeNextRequired = (total: number) => {
  const computed = Math.max(total * 0.11, 0.015);
  return Number(computed.toFixed(3));
};

export const MockDataProvider = ({ children }: { children: ReactNode }) => {
  const [wallet, setWallet] = useState<WalletState>(demoWallet);
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => inquiriesSeed.map((inq) => copyInquiry(inq)));
  const { pushToast } = useToastContext();

  const researchers = useMemo(
    () => [
      { address: "0xB4d1...aa12", ens: "etherwalk.base" },
      { address: "0xC73b...58af", ens: "labseven.base" },
      { address: "0x9D82...c310", ens: "omicforge.base" }
    ],
    []
  );

  const setRole = useCallback((role: WalletRole) => {
    setWallet((prev) => ({ ...prev, role }));
  }, []);

  const wrapEth = useCallback(
    (amount: number) => {
      if (amount <= 0) return;
      setWallet((prev) => ({
        ...prev,
        ethBalance: Number(Math.max(prev.ethBalance - amount, 0).toFixed(3)),
        wethBalance: Number((prev.wethBalance + amount).toFixed(3))
      }));
      pushToast({
        title: "WETH wrapped",
        description: `Converted ${amount.toFixed(3)} ETH to WETH on Base Sepolia`,
        variant: "success"
      });
    },
    [pushToast]
  );

  const createInquiry = useCallback(
    (input: CreateInquiryInput) => {
      let created: Inquiry | null = null;
      setInquiries((prev) => {
        const nextIdNumeric = prev.reduce((max, inq) => Math.max(max, Number(inq.id) || 0), 0) + 1;
        const id = nextIdNumeric.toString();
        const now = formatTimestamp();
        const nextRequired = computeNextRequired(input.deposit);
        created = {
          id,
          title: input.title,
          creator: wallet.address,
          createdAt: now,
          status: "created",
          goal: input.goal,
          traits: input.traits,
          safetyNotes: input.safetyNotes,
          publicHint: input.publicHint,
          deposit: Number(input.deposit.toFixed(3)),
          totalIncentive: Number(input.deposit.toFixed(3)),
          nextRequired,
          token: "WETH",
          initiations: [],
          timeline: [
            {
              id: crypto.randomUUID(),
              label: "Inquiry created",
              description: `Creator staked ${input.deposit.toFixed(3)} WETH; hint published.`,
              timestamp: now,
              kind: "creation"
            }
          ],
          secureChannels: {},
          secureRequests: {}
        };
        return [created, ...prev];
      });

      if (!created) {
        throw new Error("Failed to create inquiry");
      }

      setWallet((prev) => ({
        ...prev,
        wethBalance: Number(Math.max(prev.wethBalance - input.deposit, 0).toFixed(3))
      }));

      pushToast({
        title: "Inquiry drafted",
        description: `Mock tx hash 0x${created.id.padStart(8, "0")} broadcasted`,
        variant: "success"
      });

      return created;
    },
    [pushToast, wallet.address]
  );

  const updateInquiry = useCallback((id: string, updater: (inquiry: Inquiry) => Inquiry) => {
    setInquiries((prev) => prev.map((inq) => (inq.id === id ? updater(copyInquiry(inq)) : inq)));
  }, []);

  const modifyInitiation = useCallback(
    (inquiryId: string, initiationId: string, mutator: (init: Initiation, inquiry: Inquiry) => void) => {
      updateInquiry(inquiryId, (inq) => {
        const next = copyInquiry(inq);
        const initiation = next.initiations.find((item) => item.id === initiationId);
        if (!initiation) {
          return next;
        }
        mutator(initiation, next);
        next.nextRequired = computeNextRequired(Math.max(next.totalIncentive, 0));
        return next;
      });
    },
    [updateInquiry]
  );

  const initiateInquiry = useCallback(
    (inquiryId: string) => {
      const target = inquiries.find((inq) => inq.id === inquiryId);
      if (!target) {
        return;
      }
      const required = Number((target.nextRequired || computeNextRequired(target.totalIncentive)).toFixed(3));
      if (required <= 0) {
        pushToast({
          title: "Initiation blocked",
          description: "Inquiry no longer accepts additional stakes",
          variant: "warning"
        });
        return;
      }
      if (wallet.wethBalance < required) {
        pushToast({
          title: "Insufficient WETH",
          description: `Need ${required.toFixed(3)} WETH to initiate`,
          variant: "error"
        });
        return;
      }

      updateInquiry(inquiryId, (inq) => {
        const next = copyInquiry(inq);
        const amount = Number((next.nextRequired || computeNextRequired(next.totalIncentive)).toFixed(3));
        const timestamp = formatTimestamp();
        const initiation: Initiation = {
          id: crypto.randomUUID(),
          researcher: wallet.address,
          ens: wallet.ens,
          amount,
          status: "pending",
          resolved: false,
          updatedAt: timestamp,
          channelOpen: false
        };
        next.initiations = [...next.initiations, initiation];
        next.totalIncentive = Number((next.totalIncentive + amount).toFixed(3));
        next.nextRequired = computeNextRequired(next.totalIncentive);
        next.timeline.unshift({
          id: crypto.randomUUID(),
          label: "Initiation submitted",
          description: `${wallet.ens ?? wallet.address} staked ${amount.toFixed(3)} WETH`,
          timestamp,
          kind: "initiation"
        });
        return next;
      });

      setWallet((prev) => ({
        ...prev,
        wethBalance: Number(Math.max(prev.wethBalance - required, 0).toFixed(3))
      }));

      pushToast({
        title: "Initiation broadcast",
        description: `Locked ${required.toFixed(3)} WETH into EscrowVault`,
        variant: "success"
      });
    },
    [inquiries, pushToast, updateInquiry, wallet.address, wallet.ens, wallet.wethBalance]
  );

  const acceptInitiation = useCallback(
    (inquiryId: string, initiationId: string) => {
      modifyInitiation(inquiryId, initiationId, (initiation, inquiry) => {
        initiation.status = "accepted";
        initiation.resolved = false;
        initiation.channelOpen = true;
        initiation.updatedAt = formatTimestamp();
        inquiry.timeline.unshift({
          id: crypto.randomUUID(),
          label: "Initiation accepted",
          description: `${initiation.ens ?? initiation.researcher} is cleared to collaborate`,
          timestamp: initiation.updatedAt,
          kind: "accept"
        });
      });
      pushToast({
        title: "Secure channel opened",
        description: "Encrypted drawer unlocked for researcher",
        variant: "success"
      });
    },
    [modifyInitiation, pushToast]
  );

  const rejectInitiation = useCallback(
    (inquiryId: string, initiationId: string) => {
      modifyInitiation(inquiryId, initiationId, (initiation, inquiry) => {
        initiation.status = "rejected";
        initiation.resolved = true;
        initiation.channelOpen = false;
        initiation.refund = Number((initiation.amount * 0.9).toFixed(4));
        initiation.treasuryCut = Number((initiation.amount * 0.05).toFixed(4));
        initiation.poolTopUp = Number((initiation.amount * 0.05).toFixed(4));
        initiation.updatedAt = formatTimestamp();
        inquiry.totalIncentive = Number(
          (inquiry.totalIncentive - (initiation.refund || 0) - (initiation.treasuryCut || 0)).toFixed(3)
        );
        inquiry.timeline.unshift({
          id: crypto.randomUUID(),
          label: "Initiation rejected",
          description: `${initiation.ens ?? initiation.researcher} refunded ${initiation.refund} WETH`,
          timestamp: initiation.updatedAt,
          kind: "reject"
        });
      });
      pushToast({
        title: "Initiation rejected",
        description: "Refund dispatched, penalty routed",
        variant: "warning"
      });
    },
    [modifyInitiation, pushToast]
  );

  const markWorthy = useCallback(
    (inquiryId: string, initiationId: string) => {
      modifyInitiation(inquiryId, initiationId, (initiation, inquiry) => {
        initiation.status = "worthy";
        initiation.resolved = true;
        initiation.updatedAt = formatTimestamp();
        inquiry.timeline.unshift({
          id: crypto.randomUUID(),
          label: "Marked worthy",
          description: `${initiation.ens ?? initiation.researcher} eligible for final payout`,
          timestamp: initiation.updatedAt,
          kind: "worthy"
        });
      });
      pushToast({
        title: "Researcher marked worthy",
        description: "Will share in the research pot on completion",
        variant: "success"
      });
    },
    [modifyInitiation, pushToast]
  );

  const markUnworthy = useCallback(
    (inquiryId: string, initiationId: string) => {
      modifyInitiation(inquiryId, initiationId, (initiation, inquiry) => {
        initiation.status = "unworthy";
        initiation.resolved = true;
        initiation.channelOpen = false;
        initiation.refund = Number((initiation.amount * 0.8).toFixed(4));
        initiation.treasuryCut = Number((initiation.amount * 0.1).toFixed(4));
        initiation.poolTopUp = Number((initiation.amount * 0.1).toFixed(4));
        initiation.updatedAt = formatTimestamp();
        inquiry.totalIncentive = Number((inquiry.totalIncentive - (initiation.treasuryCut || 0)).toFixed(3));
        inquiry.timeline.unshift({
          id: crypto.randomUUID(),
          label: "Marked unworthy",
          description: `${initiation.ens ?? initiation.researcher} refunded ${initiation.refund} WETH`,
          timestamp: initiation.updatedAt,
          kind: "unworthy"
        });
      });
      pushToast({
        title: "Researcher marked unworthy",
        description: "Pool and treasury penalties applied",
        variant: "warning"
      });
    },
    [modifyInitiation, pushToast]
  );

  const completeInquiry = useCallback(
    (inquiryId: string) => {
      updateInquiry(inquiryId, (inquiry) => {
        const next = copyInquiry(inquiry);
        const worthyCount = next.initiations.filter((init) => init.status === "worthy").length;
        const total = next.totalIncentive;
        const userCut = Number((total * 0.1).toFixed(3));
        const researchPot = Number((total - userCut).toFixed(3));
        const timestamp = formatTimestamp();
        next.status = "completed";
        next.completionSummary = {
          userCut,
          researchPot,
          worthyCount,
          txHash: `0x${inquiryId.padStart(8, "0")}`
        };
        next.timeline.unshift({
          id: crypto.randomUUID(),
          label: "Inquiry completed",
          description: `Creator received ${userCut} WETH; ${worthyCount} worthy researchers paid.`,
          timestamp,
          kind: "complete"
        });
        next.totalIncentive = 0;
        next.nextRequired = 0;
        return next;
      });
      pushToast({
        title: "Inquiry settled",
        description: "Creator cut + research pot distributed",
        variant: "success"
      });
    },
    [pushToast, updateInquiry]
  );

  const openSecureChannel = useCallback(
    (inquiryId: string, initiationId: string) => {
      updateInquiry(inquiryId, (inquiry) => {
        const next = copyInquiry(inquiry);
        if (!next.secureChannels[initiationId]) {
          next.secureChannels[initiationId] = [];
        }
        next.secureChannels[initiationId].push({
          id: crypto.randomUUID(),
          author: "system",
          authorLabel: "System",
          body: "Secure tunnel established. Share encrypted metabolomics payloads only.",
          timestamp: formatTimestamp(),
          status: "delivered"
        });
        return next;
      });
      pushToast({
        title: "Secure channel ready",
        description: "End-to-end encrypted drawer active",
        variant: "success"
      });
    },
    [pushToast, updateInquiry]
  );

  const addChannelMessage = useCallback(
    (inquiryId: string, initiationId: string, message: Omit<ChatMessage, "id" | "timestamp">) => {
      updateInquiry(inquiryId, (inquiry) => {
        const next = copyInquiry(inquiry);
        if (!next.secureChannels[initiationId]) {
          next.secureChannels[initiationId] = [];
        }
        next.secureChannels[initiationId].push({
          ...message,
          id: crypto.randomUUID(),
          timestamp: formatTimestamp()
        });
        return next;
      });
    },
    [updateInquiry]
  );

  const addSecureRequest = useCallback(
    (inquiryId: string, initiationId: string, request: Omit<SecureRequest, "id" | "updatedAt">) => {
      updateInquiry(inquiryId, (inquiry) => {
        const next = copyInquiry(inquiry);
        if (!next.secureRequests[initiationId]) {
          next.secureRequests[initiationId] = [];
        }
        next.secureRequests[initiationId].push({
          ...request,
          id: crypto.randomUUID(),
          updatedAt: formatTimestamp()
        });
        return next;
      });
      pushToast({
        title: "Request logged",
        description: request.label,
        variant: "default"
      });
    },
    [pushToast, updateInquiry]
  );

  const resolveSecureRequest = useCallback(
    (inquiryId: string, initiationId: string, requestId: string) => {
      updateInquiry(inquiryId, (inquiry) => {
        const next = copyInquiry(inquiry);
        const requests = next.secureRequests[initiationId];
        if (!requests) {
          return next;
        }
        const target = requests.find((req) => req.id === requestId);
        if (!target) {
          return next;
        }
        target.status = "fulfilled";
        target.updatedAt = formatTimestamp();
        return next;
      });
      pushToast({
        title: "Request fulfilled",
        description: "Encrypted payload posted to channel",
        variant: "success"
      });
    },
    [pushToast, updateInquiry]
  );

  const value = useMemo(
    () => ({
      wallet,
      inquiries,
      researchers,
      setRole,
      wrapEth,
      initiateInquiry,
      createInquiry,
      acceptInitiation,
      rejectInitiation,
      markWorthy,
      markUnworthy,
      completeInquiry,
      openSecureChannel,
      addChannelMessage,
      addSecureRequest,
      resolveSecureRequest
    }),
    [
      wallet,
      inquiries,
      researchers,
      setRole,
      wrapEth,
      initiateInquiry,
      createInquiry,
      acceptInitiation,
      rejectInitiation,
      markWorthy,
      markUnworthy,
      completeInquiry,
      openSecureChannel,
      addChannelMessage,
      addSecureRequest,
      resolveSecureRequest
    ]
  );

  return <MockDataContext.Provider value={value}>{children}</MockDataContext.Provider>;
};

export const useMockData = () => {
  const ctx = useContext(MockDataContext);
  if (!ctx) {
    throw new Error("useMockData must be used within MockDataProvider");
  }
  return ctx;
};