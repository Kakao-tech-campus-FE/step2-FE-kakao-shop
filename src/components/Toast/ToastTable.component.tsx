import Toast from "./Toast.component";
import "@/components/Toast/toast-table.css";
import { useToast } from "@/hooks/useToast";

const ToastTable = () => {
  const { toasts } = useToast();

  return (
    <div className="toast-table">
      {toasts.map((toast, index) => (
        <Toast key={toast.id} index={index} {...toast} />
      ))}
    </div>
  );
};

export default ToastTable;
