import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;

  }
`;

export const ToastButton = styled.button`
  margin-left: 10px;
  padding: 15px 40px;
  border: 0;
  border-radius: 5px;
  background-color: #ffeb00;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 700px;
  height: 70px;
  padding: auto;
  padding-left: 20px;
  border-radius: 5px;
  background-color: rgb(51, 51, 51);
  color: white;
  transform: translateX(-50%);
  animation: ${fadeIn} 0.3s ease-in;
`;
