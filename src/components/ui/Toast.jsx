import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Toast = ({ message, duration = 3000 }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <>
      {showToast && (
        <ToastContainer>
          <div className="toast-message">{message}</div>
        </ToastContainer>
      )}
    </>
  );
};

const ToastContainer = styled.div`
  background-color: rgba(255, 127, 80, 0.4);
  border: 1px solid rgba(255, 127, 80, 0.1);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  height: 40px;
  width: 250px;
  margin: 0 30px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default Toast;
