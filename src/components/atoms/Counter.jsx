import React, { useState } from "react";

const Counter = ({ onIncrease, onDecrease, value }) => {
  const [count, setCount] = useState(value);

  const handleOnIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    onIncrease(newCount);
  };

  const handleOnDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onDecrease(newCount);
    }
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
