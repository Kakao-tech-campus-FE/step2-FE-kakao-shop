import CounterBtn from "../atoms/CounterBtn";
import { useState } from "react";

const Counter = ({ onDecrease, onIncrease }) => {
  const [count, setCount] = useState(1);

  const handleOnDecrease = () => {
    console.log("minus");
    setCount((prev) => prev - 1);
    onDecrease((prev) => prev - 1);
  };

  const handleOnIncrease = () => {
    console.log("plus");
    setCount((prev) => prev + 1);
    onIncrease((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <CounterBtn onClick={handleOnIncrease}>-</CounterBtn>
        <span>{count}</span>
        <CounterBtn onClick={handleOnDecrease}>+</CounterBtn>
      </div>
    </>
  );
};

export default Counter;
