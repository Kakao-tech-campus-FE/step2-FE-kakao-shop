import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleShowToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleShowToast}>토스트 나와라</button>
      {toastVisible && (
        <div className="toast-container">
          토스트 나왔습니다.
        </div>
      )}
    </div>
  );
};

export default Toast;