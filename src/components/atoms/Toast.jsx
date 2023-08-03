import React, { useState, useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, key }) => {
  // Add 'key' prop
  const [selected, setSelected] = useState(false);

  const dismissToast = () => {
    setSelected(false);
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
  }, [message, key]); // Include 'key' in the dependency array

  return (
    <>{selected && <div className="toast toast-notification">{message}</div>}</>
  );
};

export default Toast;
