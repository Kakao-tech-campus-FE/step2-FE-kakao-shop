import React, { useState, useEffect } from 'react';
import './toast.css';

function TToast() {
  const Toast = ({ message}) => {
    const duration = 3000;
    const [view, setView] = useState(false);

    const handleClick = () => {
      setView(true)
    };
    
    useEffect(() => {
      if (view){
        setTimeout(() => {
          setView(false)
        }, duration)
      }
    }, [view]);

    return (
      <div class = 'toastcontainer'>
        <button onClick={handleClick}>토스트 출력</button>
        <div className={`toast${view ? 'view' : 'unview'}`}>{message}</div> 
      </div>
    );
  };

  return (
    <div>
      <Toast message="알림 메시지"/>
    </div>
  );
}

export default TToast;
