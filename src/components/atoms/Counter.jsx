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

const Counter = ({ value, onClickDecrease, onClickIncrease }) => {
  const [count, setCount] = useState(value);

  const handleClickDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      onClickDecrease(count - 1);
    }
  };

  const handleClickIncrease = () => {
    setCount(count + 1);
    onClickIncrease(count + 1);
  };

  return (
    <Container>
      <StyledButton onClick={handleClickDecrease}>-</StyledButton>
      <Count>{count}</Count>
      <StyledButton onClick={handleClickIncrease}>+</StyledButton>
    </Container>
  );
};

export default Counter;
