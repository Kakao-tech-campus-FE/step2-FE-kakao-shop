import { useEffect } from "react";
import "./Toast.css";

const Toast = ({ isVisible, setIsVisible, text, interval = 1500 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, interval);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible, interval]);

  return (
    <div className={`toast ${isVisible ? "toast-show" : "toast-hide"}`}>
      <span>{text}</span>
    </div>
  );
};

export default Toast;
