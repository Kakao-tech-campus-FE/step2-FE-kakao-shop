import { styled } from "styled-components";
import { useState } from "react";

interface Props {
  onChange: (count: number) => void;
  init: number;
}

const Counter = ({ init, onChange }: Props) => {
  const [count, setCount] = useState(init);

  return (
    <Wrapper>
      <button
        disabled={count === 1 ? true : false}
        onClick={() => {
          setCount(count - 1);
          onChange(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
          onChange(count + 1);
        }}
      >
        +
      </button>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  button {
    width: 29px;
    height: 26px;
    border: 1px solid #d8d8d8;
    background-color: #fff;
    cursor: pointer;
  }
  span {
    display: inline-block;
    width: 50px;
    height: 24px;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    background-color: #fff;
    font-size: 15px;
    line-height: 26px;
    vertical-align: top;
    text-align: center;
  }
`;
