import React, { useEffect } from "react";
import "../../../styles/atoms/Toast.css";

export default function Toast({ setIsToastVisible, isToastVisible, children }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToastVisible(false); // 2초 후에 toast를 사라지게 한다.
    }, 3000);
    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머 해제
  }, [isToastVisible, setIsToastVisible]);

  return (
    <div className={`toast-background ${isToastVisible ? "active" : ""}`}>
      <div className="toast-container flex items-center justify-between rounded-md p-5 tracking-tighter text-white">
        {children}
      </div>
    </div>
  );
}
