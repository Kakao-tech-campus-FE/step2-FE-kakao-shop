import React, { useState, useEffect  } from 'react';
import './Toast.css'; 
const Toast = () => {
  const radio = [
    { id: 1, value: "Option 1" },
    { id: 2, value: "Option 2" }
  ];

  const [selected, setSelected] = useState(null); // 초기값 null


  const handleChange = (event) => {
    window.localStorage.setItem("option", event.target.value);
    setSelected(parseInt(event.target.value));
  };

   // 버튼을 클릭했을 때의 동작을 정의합니다.
   const handleClick = () => {
    if (selected !== null ){
      const message = `장바구니에 ${selected}을(를) 담았습니다!`;
      setSelected(message);
    }
  };


  // 토스트 알림 컴포넌트
const ToastNotification = ({ message }) => {
  if(isNaN(message)){
  return (
    <div className="toast toast-notification">
      {message}
    </div>
  );
  }
};

// 토스트 알림이 사라지도록 설정하는 함수
const dismissToast = () => {
  setSelected(null);
};

// 토스트 알림이 나타나 있는 시간을 설정합니다.
const toastDuration = 3000; // 3초

// selected 값이 변경되면 토스트 알림을 일정 시간 이후에 사라지도록 설정합니다.
useEffect(() => {
  if (selected) {
    const timer = setTimeout(() => {
      dismissToast();
    }, toastDuration);

    return () => clearTimeout(timer);
  }
}, [selected]);


  return (
    <>
      <h1>Toast</h1>
      <h3>옵션을 선택하세요</h3>
      {radio.map((option) => (
        <label key={option.id}>
          {option.value}
          <input
            type="radio"
            value={option.id}
            checked={selected === option.id}
            onChange={handleChange}
          />
        </label>
      ))}
       <button onClick={handleClick} disabled={selected === null}>
        {/* 선택된 값이 없는 경우 버튼을 비활성화합니다. */}
        장바구니에 담기
      </button>
      {selected && <ToastNotification message={selected} />}
    </>
  );
      }
export default Toast;
