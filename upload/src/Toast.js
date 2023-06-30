import React, { useState } from 'react';

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleButtonClick} style = {{ margin : '20px'}}>Show Toast</button>

      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'white',
            color: 'red',
            padding: '10px',
            border: '1px solid red',
            borderRadius: '4px',
          }}
        >
          Hello, Toast!
        </div>
      )}
    </div>
  );
};

export default Toast;
