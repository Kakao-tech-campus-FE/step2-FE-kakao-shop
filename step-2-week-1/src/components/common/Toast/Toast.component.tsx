import {
  FC,
  useCallback,
  useEffect,
  useInsertionEffect,
  useRef,
  useState,
} from "react";
import "@/components/common/Toast/toast.css";

export interface ToastProps {
  title: string;
  message: string;
  type: "info" | "success" | "error" | "warning";
  positionY?: "top" | "bottom" | "center";
  positionX?: "left" | "right" | "center";
  timeout?: number;
}

const Toast: FC<ToastProps> = ({
  title,
  message,
  type = "succes",
  positionY = "right",
  positionX = "top",
  timeout = 5000,
}) => {
  const [closed, setClosed] = useState<boolean>(false);
  const closeEvent = () => setClosed(true);
  const toastRef = useRef<HTMLDivElement>(null);

  const closeByTimeout = useCallback(() => {
    setTimeout(() => {
      setClosed(true);
    }, timeout);
  }, [timeout]);

  useEffect(() => {
    closeByTimeout();
  }, [closeByTimeout]);

  useInsertionEffect(() => {
    setTimeout(() => {
      if (!toastRef.current) return;
      toastRef.current.style.opacity = "1";
    });
  });

  return (
    <div
      className={`toast toast-${type} toast-y-${positionY} toast-x-${positionX} ${
        closed ? "closed" : ""
      }`}
      ref={toastRef}
    >
      <img src={`/toast/${type}.svg`} alt="alert" />
      <div className="title">{title}</div>
      <div className="message">{message}</div>
      <button onClick={closeEvent}>
        <img src="/multiply.svg" alt="close" />
      </button>
    </div>
  );
};

export default Toast;
