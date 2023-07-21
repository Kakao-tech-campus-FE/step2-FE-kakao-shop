import { useState } from "react";

const Counter = ({
  onIncrease,
  onDecrease,
}) => {
  const [count, setCount] = useState(1);

  const handleOnIncrease = () =>{ 
    setCount(count+1); // 비동기적
    onIncrease(count+1);
  };

  const handleOnDecrease = () => {
    setCount(count-1);
    onDecrease(count-1);
  }

  return (
    <div className="counter flex justify-center text-center w-32 h-8 rounded-md">
      <button onClick={handleOnDecrease} className="w-1/2">-</button>
      <span className="count mx-4 ">{count}</span>
      <button onClick={handleOnIncrease} className="w-1/2">+</button>
    </div>
  )
};

export default Counter;