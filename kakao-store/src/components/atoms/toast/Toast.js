import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Toast.css';
/* 
1. App.js에서 받은 인자로 지정된 시간만큼 setTimeout함수를 실행
2. 또한 동작하는 동안 showToast가 true 이기에 div의 클래스가 popOut으로 바뀌어 애니메이션 실행
3. 애니메이션이 끝나면 onClose함수를 실행하여 App.js의 handleCloseToast함수를 실행
4. App.js의 handleCloseToast함수는 showToast를 false로 변경하여 Toast컴포넌트를 렌더링하지 않음
5. Toast컴포넌트가 렌더링되지 않으면서 애니메이션이 끝나면 Toast컴포넌트가 사라짐
*/
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

/* propTypes으로 들어온 인자들의 데이터 타입을 지정 */
Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Toast;
