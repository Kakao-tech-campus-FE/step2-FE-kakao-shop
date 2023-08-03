import { createContext, useContext } from 'react';
import { ToastData, TypeActionData } from '../types/toast';

export const ToastContext = createContext<ToastData[] | null>(null);
export const ToastDispatchContext = createContext<React.Dispatch<TypeActionData> | null>(null);

export function useToastContext() {
  const toasts = useContext(ToastContext);
  if (!toasts) {
    throw new Error('Cannot find ToastProvider!');
  }

  const toastDispatch = useContext(ToastDispatchContext);
  if (!toastDispatch) {
    throw new Error('Cannot find ToastProvider!');
  }

  return { toasts, toastDispatch };
}
