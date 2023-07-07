import { useEffect } from "react";
import "./Toast.css";

const Toast = ({
  isVisible,
  setIsVisible,
  text,
  color = "royalblue",
  interval = 1500,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, interval);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible]);

  return (
    <div
      className={`toast ${isVisible ? "toast-show" : "toast-hide"}`}
      style={{ backgroundColor: color }}
    >
      <span>{text}</span>
    </div>
  );
};

export default Toast;
