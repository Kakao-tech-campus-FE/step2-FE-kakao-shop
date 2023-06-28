import { ToastProps } from "@/components/common/Toast";
import ToastTable from "@/components/common/ToastTable";
import { useState } from "react";

const ToastPage = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const showToast = (toast: ToastProps) => {
    setToasts([...toasts, toast]);
  };

  return (
    <>
      <button
        onClick={() =>
          showToast({
            message: "새로운 지원서가 접수 되었습니다.",
            title: "[개발자] 임채승 지원서 등록 완료!",
            type: "info",
          })
        }
      >
        Click!!!
      </button>
      <ToastTable toasts={toasts} />
    </>
  );
};

export default ToastPage;
