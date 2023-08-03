import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, error, onClose }) => {
  const [selected, setSelected] = useState(false);

  const dismissToast = () => {
    setSelected(false);
    onClose();
  };

  const showToast = () => {
    setSelected(true);
  };

  const toastDuration = 3000;

  useEffect(() => {
    if (message) {
      showToast();
      const timer = setTimeout(dismissToast, toastDuration);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      {selected && (
        <div
          className={`toast ${error ? "toast-error" : "toast-notification"}`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Toast;
