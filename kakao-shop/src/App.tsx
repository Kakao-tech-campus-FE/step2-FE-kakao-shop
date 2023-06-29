import type { ReactNode } from "react";
import styled from "@emotion/styled";
import { Toast } from "./components";

function App() {
  const handleSomething = () => {
    console.log("something");
  };

  return (
    <div>
      <S.Button
        onClick={() => {
          // 1. ReactElement를 넘길 수도 있고,
          Toast.show(
            <ToastContent onClick={handleSomething}>
              옵션을 먼저 선택해주세요.
            </ToastContent>
          );
        }}
      >
        open modal
      </S.Button>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
      <BigText>안녕하세요 뒤의 내용입니다.</BigText>
    </div>
  );
}

export default App;

const ToastContent = (props: {
  onClick: () => void;
  options?: any;
  children?: ReactNode;
}) => {
  return (
    <>
      {props.children}
      {/* <S.Button onClick={props.onClick}>something</S.Button> */}
    </>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #2080fd;
    height: 40px;
    padding: 18px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.85;
    }
    &:disabled {
      cursor: not-allowed;
      filter: contrast(0.8);
    }
    transition: 0.2s opacity;
  `,
};

const BigText = styled.div`
  font-size: 30px;
`;
