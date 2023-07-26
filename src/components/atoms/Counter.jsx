import { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 120px;
  height: 30px;
  border: 1px solid #bbb;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledButton = styled.button`
  width: 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const Count = styled.div`
  font-size: 16px;
  width: 60px;
  margin: auto 0;
  text-align: center;
`;

const Counter = ({ value, onDecrease, onIncrease }) => {
  const [count, setCount] = useState(value);

  const handleOnDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      onDecrease(count - 1);
    }
  };

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  return (
    <Container>
      <StyledButton onClick={handleOnDecrease}>-</StyledButton>
      <Count>{count}</Count>
      <StyledButton onClick={handleOnIncrease}>+</StyledButton>
    </Container>
  );
};

export default Counter;
