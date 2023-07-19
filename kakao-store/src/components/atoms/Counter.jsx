import React, { useState, useEffect } from 'react';

const Counter = ({
  value, // 최초 수량
  onIncrease, // 수량 증가
  onDecrease, // 수량 감소
}) => {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value); // value 값이 변경될 때마다 Counter의 count 상태 업데이트
  }, [value]);

  const handleOnIncrease = () => {
    const updatedCount = count + 1;
    setCount(updatedCount);
    onIncrease(updatedCount);
  };

  const handleOnDecrease = () => {
    if (count === 1) return;
    const updatedCount = count - 1;
    setCount(updatedCount);
    onDecrease(updatedCount);
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
