import React, { useState, useEffect } from 'react';

const Toast = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="toast">
          <span>{message}</span>
        </div>
      )}
    </>
  );
};

export default Toast;
