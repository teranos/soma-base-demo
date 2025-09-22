import { ChevronDown, Copy, Wallet } from "lucide-react";

import { useMockData } from "../context/MockDataContext";

export const WalletBadge = () => {
  const { wallet } = useMockData();

  const shortAddress = wallet.address.replace(/(.{6}).+(.{4})/, "$1...$2");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(wallet.address);
    } catch (error) {
      console.error("clipboard", error);
    }
  };

  return (
    <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 rounded border border-slate-800 bg-slate-900/80 px-3 py-2 shadow-sm sm:w-auto sm:flex-nowrap">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5 font-mono">
          <Wallet className="h-3.5 w-3.5 text-soma-teal" />
          {wallet.ens ?? shortAddress}
        </span>
        <button
          type="button"
          onClick={copyToClipboard}
          className="rounded p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100"
          aria-label="Copy wallet address"
        >
          <Copy className="h-3 w-3" />
        </button>
      </div>
      <div className="hidden h-6 w-px bg-slate-800 sm:block" />
      <div className="flex flex-1 min-w-[160px] flex-col text-xs text-slate-400 sm:min-w-0 sm:flex-none">
        <p className="font-medium text-slate-200">{wallet.networkLabel}</p>
        <p className="mt-0.5 font-mono text-[11px] text-slate-500">
          {wallet.ethBalance.toFixed(2)} ETH · {wallet.wethBalance.toFixed(2)} WETH
        </p>
      </div>
      <ChevronDown className="ml-auto h-4 w-4 text-slate-600 sm:ml-2" />
    </div>
  );
};
