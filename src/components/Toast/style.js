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
  color: black;
  font-size: 18px;
  border-radius: 5px;
  background-color: #ffeb00;
  border: 0;
  padding: 15px 40px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ToastContainer = styled.div`
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  width: 700px;
  height: 70px;
  border-radius: 5px;
  padding: auto;
  background-color: rgb(51, 51, 51);
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 20px;
  animation: ${fadeIn} 0.3s ease-in;
`;
