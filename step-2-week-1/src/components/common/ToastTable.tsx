import Toast, { ToastProps } from "@/components/common/Toast";
import { FC } from "react";
import "@/components/common/toast-table.css";

interface ToastTableProps {
  toasts: ToastProps[];
}

const ToastTable: FC<ToastTableProps> = ({ toasts }) => {
  return (
    <div className="toast-table">
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          message={toast.message}
          title={toast.title}
          type={toast.type}
        />
      ))}
    </div>
  );
};

export default ToastTable;
