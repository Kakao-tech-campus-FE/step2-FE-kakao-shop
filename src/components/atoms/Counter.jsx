import { useState } from "react";

const Counter = ({
  onIncrease, // 수량 증가 함수
  onDecrease, // 수량 감소 함수
}) => {
  const [count, setCount] = useState(1);
  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };
  const handleOnDecrease = () => {
    setCount(count - 1);
    onDecrease(count - 1);
  };
  return (<div>
    <div className="flex">
      <button className="border-2 w-6" onClick={handleOnDecrease}>-</button>
      <div className="border-2 w-12 text-center">{count}</div>
      <button className="border-2 w-6" onClick={handleOnIncrease}>+</button>
    </div>
  </div>);
};

export default Counter;
