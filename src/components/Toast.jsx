import React, { useState } from 'react';

export default function Toast() {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Toast</button>
      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#424242',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '4px',
            zIndex: 9999,
          }}
        >
          Toast Message
        </div>
      )}
    </div>
  );
}
