import type { ReactNode } from "react";
import styled from "@emotion/styled";
import { Toast } from "./components/@base";
import Checkbox from "./components/@base/CheckBox";
import CheckBoxItem from "./components/@molecules/CheckBoxItem";
import Pay from "./components/domains/Pay";

function App() {
  const handleSomething = () => {
    console.log("something");
  };

  return (
    <div>
      <Pay.Agree />
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
