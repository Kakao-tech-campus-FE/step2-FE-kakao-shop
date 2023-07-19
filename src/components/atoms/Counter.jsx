import { useState } from "react";

const Counter = ({ onIncrease, onDecrease }) => {
  const [count, setCount] = useState(1);

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
    // 동기함수 : 무조건 코드가 한 줄 한 줄 끝나고 다음 것이 실행
    // 비동기함수 : 일단 실행을 하고, 나중에 처리가 될 수 있음
  };

  const handleOnDecrease = () => {
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
