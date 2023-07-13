import React, { useState, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import '../styles/toast.css';

const ToastBar = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div className="ToastContainer">
      <button className="ToastButton" onClick={toggleToast}>Toast</button>
      <div className="ToastBarContainer">
        <Toast isOpen={showToast}>
          <ToastHeader toggle={toggleToast}>바보입니다.</ToastHeader>
          <ToastBody>죄송합니다. 죄송합니다. 죄송합니다.</ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default ToastBar;
