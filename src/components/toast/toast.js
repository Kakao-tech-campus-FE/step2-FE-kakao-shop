import React, { useState, useEffect } from 'react';

function Toast({ message, duration, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className={`toast ${isVisible ? 'show' : ''}`}>
      <div className="toast-message">{message}</div>
    </div>
  );
}

export default Toast;
