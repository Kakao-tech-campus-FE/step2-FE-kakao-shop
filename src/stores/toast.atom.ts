import { atom } from "jotai";

export interface ToastAtom {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "error" | "warning";
  timeout?: number;
}

export const toastsAtom = atom<ToastAtom[]>([]);
