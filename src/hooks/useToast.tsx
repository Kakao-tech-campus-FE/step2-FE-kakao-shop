import { useState } from "react";
export interface Toast {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "error" | "warning";
  timeout?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Toast) => {
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
