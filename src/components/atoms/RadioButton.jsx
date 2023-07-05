import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 6.5rem;
`;

const Radio = styled.input`
  width: 6rem;
  height: 3rem;
  appearance: none;
  transition: background-color 50ms linear;
  border: 1px solid gray;
  border-radius: 10px;
  position: relative;

  &:checked {
    background-color: #ffee00;
    border-color: #ffee00;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const RadioButton = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Container>
        <Radio
          type="radio"
          checked={isChecked}
          name="상품"
          value={name}
          onChange={handleChecked}
        ></Radio>
        <Label htmlFor={name}>{name}</Label>
      </Container>
    </>
  );
};

export default RadioButton;
