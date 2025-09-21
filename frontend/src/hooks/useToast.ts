import { useToastContext } from "../context/ToastContext";

export const useToast = () => {
  const { pushToast, dismissToast, toasts } = useToastContext();
  return { pushToast, dismissToast, toasts };
};