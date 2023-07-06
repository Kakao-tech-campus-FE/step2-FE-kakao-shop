import React, { useEffect } from 'react';
import './Toast.css';

interface ToastProps {
  children: React.ReactNode;
  duration?: number;
  position: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast = ({ children, duration = 1000, position = 'top-left', isVisible, setIsVisible }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  if (!isVisible) {
    return null;
  }

  return <div className={`toast ${position}`}>{children}</div>;
};

export default Toast;
