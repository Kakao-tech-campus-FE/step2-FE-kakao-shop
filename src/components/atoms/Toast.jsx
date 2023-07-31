import styled from "styled-components";
import { useState, useEffect } from "react";

const ToastDiv = styled.div`
  background-color: rgb(58, 58, 58);
  width: 20rem;
  border-radius: 0.8rem;
  padding: 1rem 1.8rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.158);
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  bottom: ${({ isShowing }) => (isShowing ? "3rem" : "-10rem")};
`;

const ToastLabel = styled.label`
  &:nth-child(1) {
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  &:nth-child(2) {
    color: rgb(184, 184, 184);
    font-size: 0.8rem;
  }
`;

const Toast = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowing(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const today = new Date();
  const todayTime = today.toLocaleTimeString();

  return (
    <ToastDiv isShowing={isShowing}>
      <ToastLabel>{children}</ToastLabel>
      <ToastLabel>{todayTime}</ToastLabel>
    </ToastDiv>
  );
};

export default Toast;
