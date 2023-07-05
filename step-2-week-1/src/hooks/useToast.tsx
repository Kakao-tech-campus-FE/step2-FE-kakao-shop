import { ToastAtom, toastsAtom } from "@/stores/toast.atom";
import { useAtom } from "jotai";

export const useToast = () => {
  const [toasts, setToasts] = useAtom(toastsAtom);

  const addToast = (toast: ToastAtom) => {
    setToasts([...toasts, toast]);
  };

  const removeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    addToast,
    removeToast,
  };
};
