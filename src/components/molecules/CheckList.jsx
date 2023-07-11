import styled from "styled-components";
import { useState } from "react";

const InputCheck = styled.input`
  width: 1rem;
  height: 1rem;
  appearance: none;
  outline: none;
  border: 2px solid gray;
  border-radius: 0.2rem;
  transition: background-color 250ms linear;

  &:checked::before {
    content: "";
    position: absolute;
    width: 0.3rem;
    height: 0.3rem;
    border: solid gray;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:checked {
    background-color: #ffee00;
    border-color: #ffee00;
  }
`;

const CheckList = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <InputCheck type="checkbox" checked={isChecked} onClick={handleChecked} />
      <label>{children}</label>
    </>
  );
};

export default CheckList;
