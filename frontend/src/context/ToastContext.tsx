import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

export type ToastVariant = "default" | "success" | "error" | "warning";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  href?: string;
  variant?: ToastVariant;
  createdAt: number;
}

interface ToastContextValue {
  toasts: ToastItem[];
  pushToast: (toast: Omit<ToastItem, "id" | "createdAt">) => void;
  dismissToast: (id: string) => void;
  clearToasts: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const pushToast = useCallback(
    (toast: Omit<ToastItem, "id" | "createdAt">) => {
      const id = crypto.randomUUID();
      const payload: ToastItem = { ...toast, id, createdAt: Date.now() };

      setToasts((prev) => [...prev.slice(-2), payload]);

      if (typeof window !== "undefined") {
        window.setTimeout(() => {
          dismissToast(id);
        }, 1000);
      }
    },
    [dismissToast]
  );

  const value = useMemo(
    () => ({ toasts, pushToast, dismissToast, clearToasts }),
    [toasts, pushToast, dismissToast, clearToasts]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToastContext must be used within ToastProvider");
  }
  return ctx;
};
