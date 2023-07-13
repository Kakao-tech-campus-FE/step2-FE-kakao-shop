export interface ToastData {
  id: number;
  toastPosition: string;
  toastMsg: string;
  duration: number;
}

export type TypeActionData = {
  type: 'added';
  id: number;
  toastPosition: string;
  toastMsg: string;
  duration: number;
} | {
  type: 'deleted';
  id: number;
};
