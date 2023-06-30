import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';

const Toast = ({ message, duration, onClose }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  const handleAnimationEnd = () => {
    if (!showToast) {
      onClose();
    }
  };

  return (
    <div
      className={`toast ${showToast ? 'pop-out' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="toast-content">{message}</div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Toast;
