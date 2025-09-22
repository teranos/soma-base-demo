export interface ChatMessage {
  id: string;
  author: string;
  authorLabel: string;
  body: string;
  timestamp: string;
  status?: "sent" | "delivered" | "read";
}

export type InitiationStatus =
  | "pending"
  | "accepted"
  | "rejected"
  | "worthy"
  | "unworthy";

export interface Initiation {
  id: string;
  researcher: string;
  ens?: string;
  amount: number;
  status: InitiationStatus;
  resolved: boolean;
  updatedAt: string;
  channelOpen: boolean;
  notes?: string;
  refund?: number;
  treasuryCut?: number;
  poolTopUp?: number;
  txHash?: string;
}

export type TimelineKind =
  | "creation"
  | "initiation"
  | "accept"
  | "reject"
  | "worthy"
  | "unworthy"
  | "complete"
  | "update";

export interface TimelineEvent {
  id: string;
  label: string;
  description: string;
  timestamp: string;
  kind: TimelineKind;
}

export interface SecureRequest {
  id: string;
  label: string;
  detail: string;
  status: "requested" | "fulfilled" | "dismissed";
  updatedAt: string;
}

export interface Inquiry {
  id: string;
  title: string;
  creator: string;
  createdAt: string;
  status: "created" | "active" | "completed";
  goal: string;
  traits: string[];
  safetyNotes: string;
  publicHint: string;
  deposit: number;
  totalIncentive: number;
  nextRequired: number;
  token: string;
  initiations: Initiation[];
  timeline: TimelineEvent[];
  secureChannels: Record<string, ChatMessage[]>;
  secureRequests: Record<string, SecureRequest[]>;
  completionSummary?: {
    userCut: number;
    researchPot: number;
    worthyCount: number;
    txHash?: string;
  };
}

export interface WalletState {
  address: string;
  ens?: string;
  ethBalance: number;
  wethBalance: number;
  networkLabel: string;
}
