import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const ToastContainer = styled.div`
  margin: 20px;
`;

const Toast = styled.div`
  margin: 20px;
  border: 1px solid #ca9978;
  border-radius: 10px;
  background-color: #ffce84;
  font-size: 20px;
  font-weight: 500;
  color: #765138;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ToastExample() {
  const [isActive, setIsActive] = useState(false);

  const handleToast = () => {
    setIsActive(true);
  };

  // 2초 후에 사라짐
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <ToastContainer>
      <button onClick={handleToast}>토스트 메시지 실행</button>
      {isActive && <Toast>🍞 Toast Message!</Toast>}
    </ToastContainer>
  );
}
