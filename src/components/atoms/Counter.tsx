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
    <div className="flex items-center space-x-3 mr-5">
      <button
        type="button"
        onClick={handleOnDecrease}
        className="box-content flex items-center p-2 w-[8px] h-[8px] shadow-outFlatSm rounded"
      >
        -
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={handleOnIncrease}
        className="box-content flex items-center p-2 w-[8px] h-[8px] shadow-outFlatSm rounded"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
