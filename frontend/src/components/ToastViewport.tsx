import { useEffect } from "react";

import { useToast } from "../hooks/useToast";
import { X } from "lucide-react";
import clsx from "clsx";

export const ToastViewport = () => {
  const { toasts, dismissToast, clearToasts } = useToast();

  useEffect(() => {
    if (toasts.length === 0) {
      return;
    }

    const handleScroll = () => {
      clearToasts();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toasts.length, clearToasts]);

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex w-80 flex-col gap-3 text-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            "rounded border border-slate-700/80 bg-slate-900/95 px-4 py-3 shadow-lg backdrop-blur",
            toast.variant === "success" && "border-soma-lime/60 shadow-glow",
            toast.variant === "error" && "border-red-500/70",
            toast.variant === "warning" && "border-amber-500/60"
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-slate-100">{toast.title}</p>
              {toast.description ? <p className="mt-1 text-xs text-slate-400">{toast.description}</p> : null}
              {toast.href ? (
                <a
                  href={toast.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-mono text-soma-teal"
                >
                  View on BaseScan
                </a>
              ) : null}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="mt-0.5 rounded p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-200"
              aria-label="Dismiss toast"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
