# Soma Inquiry Frontend Prototype

Standalone Vite + React + Tailwind interface that mirrors the finished Soma Inquiry product vision using mock data only. It focuses on presenting the intake, researcher queue, inquiry detail, secure channel drawer, and completion reporting without touching live contracts.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at <http://localhost:5173>. All values are mocked locally to illustrate the Base Sepolia experience.

## Highlights

- Multi-step creator intake with wallet prep, inquiry brief, and review states.
- Researcher queue that surfaces stake requirements, acceptance velocity, and penalty splits.
- Inquiry detail view with lifecycle rail, initiation management, secure channel chat, and request handling.
- Toast system, role toggling, and wallet badge for Base Sepolia posture.
- Tailwind-driven dark, glitchy aesthetic aligned with the handoff palette.

Future backend integration can swap the context provider with live contract reads/writes.