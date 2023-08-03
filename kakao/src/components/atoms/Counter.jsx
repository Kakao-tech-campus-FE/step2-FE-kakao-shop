import React, { useState, useEffect } from "react";
import "../../styles/atoms/Counter.css";

const Counter = ({ quantity, onIncrease, onDecrease }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (quantity !== undefined) {
      setCount(quantity);
    }
  }, [quantity]);

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };
  const handleOnDecrease = () => {
    if (count === 1) return;
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
