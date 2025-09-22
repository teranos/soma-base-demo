import { useToastContext } from "../context/ToastContext";

export const useToast = () => {
  const { pushToast, dismissToast, clearToasts, toasts } = useToastContext();
  return { pushToast, dismissToast, clearToasts, toasts };
};
