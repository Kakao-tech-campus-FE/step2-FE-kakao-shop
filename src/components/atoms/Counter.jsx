import { useState } from "react";

const Counter = ({
  onIncrease, // 수량 증가 함수
  onDecrease, // 수량 감소 함수
}) => {
  const [count, setCount] = useState(1);

  const handleClickIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleClickDecrease = () => {
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div>
      <button onClick={handleClickDecrease}>-</button>
      <span className="count">{count}</span>
      <button onClick={handleClickIncrease}>+</button>
    </div>
  );
};

export default Counter;
