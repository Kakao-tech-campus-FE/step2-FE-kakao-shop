import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration = 2000 }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const toastUpTime = setTimeout(() => {
      setShowToast(false);
    }, duration);

    const toastDownTime = setTimeout(() => {
      setShowToast(true);
    }, duration + 2000);

    return () => {
      clearTimeout(toastUpTime);
      clearTimeout(toastDownTime);
    };
  }, [duration]);

  if (!showToast) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'green', color: 'white' }}>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
