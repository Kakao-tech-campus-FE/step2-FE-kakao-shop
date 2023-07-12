import React, { useRef } from 'react';

const Toast = () => {
  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.style.display = 'block';
      setTimeout(() => {
        toastRef.current.style.display = 'none';
      }, 1000);
    }
  };

  return (
    <div>
      <button onClick={showToast}>회원가입 하기</button>
      <div ref={toastRef} style={{ display: 'none' }}> 
        회원가입 완료 !
      </div>
    </div>
  );
};

export default Toast;
