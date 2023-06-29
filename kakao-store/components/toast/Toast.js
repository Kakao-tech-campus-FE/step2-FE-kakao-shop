import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = ({ message, duration, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`toast ${show ? 'show' : 'hide'}`}>
      <div className="toast-content">{message}</div>
    </div>
  );
};

export default Toast;
