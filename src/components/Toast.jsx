import React from 'react';
import '../styles/Toast.css';

const Toast = ({ message }) => {
  return (
    <div className="toast">
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;