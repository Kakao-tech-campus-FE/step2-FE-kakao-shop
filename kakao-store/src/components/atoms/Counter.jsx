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
    <div className="counter flex text-center ">
      <button onClick={handleOnDecrease} className="h-7 w-7 rounded-l border border-solid border-gray-300 bg-white">
        <span className="minus text-base">-</span>
      </button>
      <span className="count  h-7 w-7 border border-solid border-gray-300 bg-white">{count}</span>
      <button onClick={handleOnIncrease} className="h-7 w-7 rounded-r border border-solid border-gray-300 bg-white">
        <span className="plus text-base">+</span>
      </button>
    </div>
  );
};

export default Counter;
