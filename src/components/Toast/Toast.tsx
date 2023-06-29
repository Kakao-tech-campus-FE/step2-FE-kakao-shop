import React from 'react';
import './Toast.css';

interface ToastProps {
  children: React.ReactNode;
  position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}

const Toast = ({ children, position = 'top-left' }: ToastProps) => {
  return <div className={`toast ${position}`}>{children}</div>;
};

export default Toast;
