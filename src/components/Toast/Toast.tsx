import React from 'react';
import './Toast.css';

interface ToastProps {
  children: React.ReactNode;
}

const Toast = ({ children }: ToastProps) => {
  return <div className='toast'>{children}</div>;
};

export default Toast;
