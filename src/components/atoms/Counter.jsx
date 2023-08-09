import React, { useEffect, useState } from 'react';

const Counter = ({
  value,
  // 최초수량, 수량 증가,감소 함수
  onIncrease,
  onDecrease,
}) => {
  // const [count, setCount] = useState(value);

  // useEffect(() => {
  //   setCount(count);
  //   onIncrease(count);
  // }, value);

  const handleOnIncrease = () => {
    // setCount(value + 1);
    onIncrease(value + 1);
  };

  const handleOnDecrease = () => {
    // setCount(value - 1);
    onDecrease(value - 1);
  };
  return (
    <div className="counter">
      <button onClick={handleOnDecrease}> - </button>
      <span className="count">{value}</span>
      <button onClick={handleOnIncrease}> + </button>
    </div>
  );
};
export default Counter;
