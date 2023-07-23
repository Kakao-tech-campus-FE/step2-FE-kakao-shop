import React, { useEffect, useState } from 'react';

const Counter = ({
  value,
  // 최초수량, 수량 증가,감소 함수
  onIncrease,
  onDecrease,
}) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(count);
    onIncrease(count);
  }, value);

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleOnDecrease = () => {
    setCount(count - 1);
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
