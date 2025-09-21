import { Inquiry, WalletState } from "../lib/types";

export const demoWallet: WalletState = {
  address: "0xA1c7...42f9",
  ens: "biowallet.base",
  role: "creator",
  ethBalance: 1.82,
  wethBalance: 0.74,
  networkLabel: "Base Sepolia"
};

const now = new Date();

const iso = (hoursAgo: number) => new Date(now.getTime() - hoursAgo * 60 * 60 * 1000).toISOString();

export const inquiriesSeed: Inquiry[] = [
  {
    id: "184",
    title: "Long COVID lipid metabolomics",
    creator: "0xA1c7...42f9",
    createdAt: iso(9),
    status: "active",
    goal: "Correlate circulating lipid ratios with persistent fatigue markers across 30 patient journals.",
    traits: ["Bioinformatics", "Long COVID", "Metabolomics"],
    safetyNotes: "Sensitive longitudinal data. Require encrypted channel before any PHI transfer.",
    publicHint: "keccak256:0xa32f...",
    deposit: 0.15,
    totalIncentive: 0.42,
    nextRequired: 0.046,
    token: "WETH",
    initiations: [
      {
        id: "init-0",
        researcher: "0xB4d1...aa12",
        ens: "etherwalk.base",
        amount: 0.036,
        status: "worthy",
        resolved: true,
        updatedAt: iso(2),
        channelOpen: true,
        notes: "Shared initial cohort alignment.",
        txHash: "0xdb3a...ab19"
      },
      {
        id: "init-1",
        researcher: "0xC73b...58af",
        ens: "labseven.base",
        amount: 0.041,
        status: "rejected",
        resolved: true,
        updatedAt: iso(4),
        channelOpen: false,
        refund: 0.0369,
        treasuryCut: 0.0021,
        poolTopUp: 0.002,
        txHash: "0x9f21...bc11"
      },
      {
        id: "init-2",
        researcher: "0x9D82...c310",
        ens: "omicforge.base",
        amount: 0.048,
        status: "accepted",
        resolved: false,
        updatedAt: iso(1.2),
        channelOpen: true,
        notes: "Awaiting raw LC-MS export.",
        txHash: "0x4ab2...45dd"
      }
    ],
    timeline: [
      {
        id: "event-0",
        label: "Inquiry created",
        description: "Creator staked 0.15 WETH; hint published.",
        timestamp: iso(9),
        kind: "creation"
      },
      {
        id: "event-1",
        label: "Initiation accepted",
        description: "etherwalk.base locked 0.036 WETH",
        timestamp: iso(6.5),
        kind: "accept"
      },
      {
        id: "event-2",
        label: "Initiation rejected",
        description: "labseven.base refunded 0.0369 WETH, penalty split",
        timestamp: iso(4),
        kind: "reject"
      },
      {
        id: "event-3",
        label: "Marked worthy",
        description: "etherwalk.base designated worthy for final payouts",
        timestamp: iso(2),
        kind: "worthy"
      }
    ],
    secureChannels: {
      "init-0": [
        {
          id: "chat-0",
          author: "creator",
          authorLabel: "Creator",
          body: "Can you confirm coverage of IL-6 across the cohort?",
          timestamp: iso(2.5),
          status: "read"
        },
        {
          id: "chat-1",
          author: "0xB4d1...aa12",
          authorLabel: "etherwalk.base",
          body: "Uploading encrypted matrix now. Hash: QmVk7...nP1",
          timestamp: iso(2.3),
          status: "delivered"
        }
      ],
      "init-2": [
        {
          id: "chat-2",
          author: "creator",
          authorLabel: "Creator",
          body: "Need normalized intensity tables by tomorrow for review.",
          timestamp: iso(1.1),
          status: "sent"
        }
      ]
    },
    secureRequests: {
      "init-0": [
        {
          id: "req-0",
          label: "Upload raw metabolite ratios",
          detail: "Prefer CSV zipped + encrypted via Soma channel.",
          status: "fulfilled",
          updatedAt: iso(2.2)
        }
      ],
      "init-2": [
        {
          id: "req-1",
          label: "Provide anonymized consent forms",
          detail: "Signed PDF, redact direct identifiers.",
          status: "requested",
          updatedAt: iso(0.9)
        }
      ]
    }
  },
  {
    id: "173",
    title: "Neuroimmune flare early detection",
    creator: "0x6F22...91b0",
    createdAt: iso(32),
    status: "completed",
    goal: "Train lightweight classifier to flag pre-relapse biomarkers from wearable data.",
    traits: ["ML", "Neuroimmune", "Wearables"],
    safetyNotes: "Data derived from blinded study; anonymized streams only.",
    publicHint: "ipfs://bafybeidemo",
    deposit: 0.12,
    totalIncentive: 0.0,
    nextRequired: 0,
    token: "WETH",
    initiations: [
      {
        id: "173-init-0",
        researcher: "0xB4d1...aa12",
        ens: "etherwalk.base",
        amount: 0.038,
        status: "worthy",
        resolved: true,
        updatedAt: iso(24.5),
        channelOpen: true,
        notes: "Submitted feature engineering script.",
        txHash: "0x8a7b...92be"
      },
      {
        id: "173-init-1",
        researcher: "0xC73b...58af",
        ens: "labseven.base",
        amount: 0.042,
        status: "unworthy",
        resolved: true,
        updatedAt: iso(26),
        channelOpen: true,
        refund: 0.0336,
        treasuryCut: 0.0042,
        poolTopUp: 0.0042,
        txHash: "0x6cd1...ad02"
      }
    ],
    timeline: [
      {
        id: "173-event-0",
        label: "Inquiry completed",
        description: "Creator received 0.028 WETH creator cut.",
        timestamp: iso(20),
        kind: "complete"
      },
      {
        id: "173-event-1",
        label: "Treasury top up",
        description: "0.0042 WETH routed to SomaTreasury.",
        timestamp: iso(26),
        kind: "update"
      }
    ],
    secureChannels: {},
    secureRequests: {},
    completionSummary: {
      userCut: 0.028,
      researchPot: 0.084,
      worthyCount: 1,
      txHash: "0x1a3f...7712"
    }
  }
];