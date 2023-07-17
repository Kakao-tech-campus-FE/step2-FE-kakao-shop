import React, { useState } from "react";

const Counter = ({
  value, // 최초 수량
  onIncrease, // 수량 증가
  onDecrease, // 수량 감소
}) => {
  const [count, setCount] = useState(value);

  const handleOnIncrease = () => {
    // count = 1
    setCount(count + 1);
    // count = ?
    onIncrease(count + 1);
  };

  const handleOnDecrease = () => {
    // count = 1
    setCount(count - 1);
    // count = ?
    onDecrease(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={handleOnDecrease}>-</button>
      <span className="count">{count}</span>
      <button onClick={handleOnIncrease}>+</button>
    </div>
  );
};

export default Counter;
