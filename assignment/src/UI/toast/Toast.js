import React, { useState, useEffect } from 'react';
import './Toast.css';

function Toast({ message, duration }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return <div className={`toast ${show ? 'show' : ''}`}>{message}</div>;
}

export default Toast;
