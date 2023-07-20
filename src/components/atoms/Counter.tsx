import React, { useState } from 'react';

interface CounterProps {
  value: number;
  onIncrease: (prevState: number) => void;
  onDecrease: (prevState: number) => void;
}

const Counter = ({ value, onIncrease, onDecrease }: CounterProps) => {
  const [count, setcount] = useState(value);
  const handleOnIncrease = () => {
    setcount((prev: number) => prev + 1);
    onIncrease(count + 1);
  };
  const handleOnDecrease = () => {
    setcount((prev: number) => prev - 1);
    onDecrease(count - 1);
  };
  return (
    <div>
      <button type="button" onClick={handleOnDecrease}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleOnIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
