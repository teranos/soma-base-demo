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
    id: "196",
    title: "Myalgic encephalomyelitis variant hunt",
    creator: "0x4E11...f0B9",
    createdAt: iso(1.4),
    status: "created",
    goal: "Catalog de novo variants from 12 long-read genomes to guide targeted RNA knockdowns.",
    traits: ["Genomics", "Variant calling", "CRISPR"],
    safetyNotes: "Samples include identifiable metadata. Keep exports hashed and tunnel-only until registry clearance.",
    publicHint: "cid:QmVariantSketch",
    deposit: 0.018,
    totalIncentive: 0.018,
    nextRequired: 0.015,
    token: "WETH",
    initiations: [],
    timeline: [
      {
        id: "196-event-0",
        label: "Inquiry drafted",
        description: "Creator staged 0.018 WETH, waiting on IRB sign-off before opening queue.",
        timestamp: iso(1.4),
        kind: "creation"
      }
    ],
    secureChannels: {},
    secureRequests: {}
  },
  {
    id: "194",
    title: "Autoimmune flare cytokine triangulation",
    creator: "0xA1c7...42f9",
    createdAt: iso(18),
    status: "active",
    goal: "Cross-check serum cytokine spikes against wearable anomalies to pre-empt lupus flares.",
    traits: ["Immunology", "Wearables", "Signal processing"],
    safetyNotes: "Creator has paused external downloads until HIPAA scrub complete; only hashed payloads permitted.",
    publicHint: "keccak256:0x549c...",
    deposit: 0.11,
    totalIncentive: 0.31,
    nextRequired: 0.034,
    token: "WETH",
    initiations: [
      {
        id: "194-init-0",
        researcher: "0xB4d1...aa12",
        ens: "etherwalk.base",
        amount: 0.033,
        status: "accepted",
        resolved: false,
        updatedAt: iso(4.2),
        channelOpen: true,
        notes: "Drafted wearable anomaly matching notebook.",
        txHash: "0xbc42...aa90"
      },
      {
        id: "194-init-1",
        researcher: "0x7Aa0...19f2",
        ens: "synapsecraft.base",
        amount: 0.036,
        status: "pending",
        resolved: false,
        updatedAt: iso(2.6),
        channelOpen: false,
        notes: "Waiting on compliance clearance.",
        txHash: "0x3d1e...fe44"
      },
      {
        id: "194-init-2",
        researcher: "0x5F4b...7cd1",
        ens: "labseven.base",
        amount: 0.041,
        status: "rejected",
        resolved: true,
        updatedAt: iso(6.8),
        channelOpen: false,
        refund: 0.0369,
        treasuryCut: 0.0021,
        poolTopUp: 0.002,
        txHash: "0xf812...119b"
      }
    ],
    timeline: [
      {
        id: "194-event-0",
        label: "Inquiry created",
        description: "Creator staked 0.11 WETH; regulatory hold noted.",
        timestamp: iso(18),
        kind: "creation"
      },
      {
        id: "194-event-1",
        label: "Initiation accepted",
        description: "etherwalk.base granted encrypted access lane.",
        timestamp: iso(7.4),
        kind: "accept"
      },
      {
        id: "194-event-2",
        label: "Compliance checkpoint",
        description: "Additional PHI scrub requested before new initiations are processed.",
        timestamp: iso(5.3),
        kind: "update"
      },
      {
        id: "194-event-3",
        label: "Initiation rejected",
        description: "labseven.base refunded with 10% penalty.",
        timestamp: iso(6.8),
        kind: "reject"
      }
    ],
    secureChannels: {
      "194-init-0": [
        {
          id: "194-chat-0",
          author: "creator",
          authorLabel: "Creator",
          body: "Use masked IDs only; anomaly JSON in channel once IRB clears.",
          timestamp: iso(4.1),
          status: "delivered"
        },
        {
          id: "194-chat-1",
          author: "0xB4d1...aa12",
          authorLabel: "etherwalk.base",
          body: "Mirroring template from prior MS study; will adapt once we see wearable schema.",
          timestamp: iso(3.9),
          status: "delivered"
        }
      ]
    },
    secureRequests: {
      "194-init-0": [
        {
          id: "194-req-0",
          label: "Share wearable anomaly export",
          detail: "JSON zipped, encrypted with shared session key.",
          status: "requested",
          updatedAt: iso(3.8)
        },
        {
          id: "194-req-1",
          label: "Confirm cytokine units",
          detail: "Need standardization notes to align lab assays.",
          status: "fulfilled",
          updatedAt: iso(2.9)
        }
      ],
      "194-init-1": [
        {
          id: "194-req-2",
          label: "Provide compliance memo",
          detail: "Upload scrub confirmation once internal review signs off.",
          status: "requested",
          updatedAt: iso(2.5)
        }
      ]
    }
  },
  {
    id: "191",
    title: "POTS autonomic response mapping",
    creator: "0x6F22...91b0",
    createdAt: iso(27),
    status: "active",
    goal: "Quantify autonomic nervous system drift in POTS patients using longitudinal HRV and metabolite data.",
    traits: ["Autonomic", "HRV", "Metabolomics"],
    safetyNotes: "Encrypted chat approved for sharing de-identified HRV segments; raw clinic notes remain off-chain.",
    publicHint: "keccak256:0x8d31...",
    deposit: 0.09,
    totalIncentive: 0.24,
    nextRequired: 0.026,
    token: "WETH",
    initiations: [
      {
        id: "191-init-0",
        researcher: "0x8c72...3901",
        ens: "wavecodec.base",
        amount: 0.028,
        status: "worthy",
        resolved: true,
        updatedAt: iso(7.6),
        channelOpen: true,
        notes: "Delivered HRV detrending module.",
        txHash: "0xa19f...be01"
      },
      {
        id: "191-init-1",
        researcher: "0xC73b...58af",
        ens: "labseven.base",
        amount: 0.031,
        status: "accepted",
        resolved: false,
        updatedAt: iso(3.2),
        channelOpen: true,
        notes: "Analyzing metabolite variance clusters.",
        txHash: "0x7bd4...9112"
      },
      {
        id: "191-init-2",
        researcher: "0x5D21...bb84",
        ens: "helixia.base",
        amount: 0.034,
        status: "unworthy",
        resolved: true,
        updatedAt: iso(11.4),
        channelOpen: false,
        refund: 0.0272,
        treasuryCut: 0.0034,
        poolTopUp: 0.0034,
        txHash: "0x4c22...771a"
      }
    ],
    timeline: [
      {
        id: "191-event-0",
        label: "Inquiry created",
        description: "Creator locked 0.09 WETH and published HRV schema hash.",
        timestamp: iso(27),
        kind: "creation"
      },
      {
        id: "191-event-1",
        label: "Initiation accepted",
        description: "wavecodec.base cleared to ingest anonymized HRV feed.",
        timestamp: iso(18.1),
        kind: "accept"
      },
      {
        id: "191-event-2",
        label: "Marked worthy",
        description: "wavecodec.base scored for payout weighting.",
        timestamp: iso(7.6),
        kind: "worthy"
      },
      {
        id: "191-event-3",
        label: "Marked unworthy",
        description: "helixia.base refunded 80%; penalty redistributed.",
        timestamp: iso(11.4),
        kind: "unworthy"
      }
    ],
    secureChannels: {
      "191-init-0": [
        {
          id: "191-chat-0",
          author: "0x8c72...3901",
          authorLabel: "wavecodec.base",
          body: "Uploading detrended HRV windows (hash QmXt4...).",
          timestamp: iso(7.5),
          status: "delivered"
        }
      ],
      "191-init-1": [
        {
          id: "191-chat-1",
          author: "creator",
          authorLabel: "Creator",
          body: "Need metabolite cluster summary before next milestone.",
          timestamp: iso(3.0),
          status: "sent"
        }
      ]
    },
    secureRequests: {
      "191-init-1": [
        {
          id: "191-req-0",
          label: "Upload metabolite PCA plot",
          detail: "PNG or JSON with component loadings.",
          status: "requested",
          updatedAt: iso(2.8)
        }
      ]
    }
  },
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
      },
      {
        id: "173-event-2",
        label: "Research pot distributed",
        description: "0.084 WETH streamed to worthy researcher wavecodec.base.",
        timestamp: iso(19.5),
        kind: "worthy"
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
