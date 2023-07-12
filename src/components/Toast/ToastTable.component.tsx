import Toast from "./Toast.component";
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
