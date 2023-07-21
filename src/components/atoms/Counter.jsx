import { useState } from "react";

const Counter = ({ onIncrease, onDecrease, quantity = 1 }) => {
  const [count, setCount] = useState(quantity);

  console.log(count);

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
    <div className="counter float-left w-32">
      <button
        className="float-left w-7 h-7 border-2 border-orange-300/75"
        onClick={handleOnDecrease}
      >
        -
      </button>
      <span className="count inline-block w-16 text-center">{count}</span>
      <button
        className="float-right w-7 h-7 border-2 border-orange-300/75"
        onClick={handleOnIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
