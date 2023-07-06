import React, { useEffect } from 'react';
import '../styles/Toast.css';

const Toast = ({ setToast, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return <span className="toast_box">{text}</span>;
};

export default Toast;
