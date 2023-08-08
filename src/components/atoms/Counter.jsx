import { useState } from "react";

const Counter = ({
  initCount = 1,
  onIncrease, // 수량 증가 함수
  onDecrease, // 수량 감소 함수
}) => {
  const [count, setCount] = useState(initCount);
  const handleOnIncrease = () => {
    if (count < 99) {
      setCount(count + 1);
      onIncrease(count + 1);
    }
  };
  const handleOnDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      onDecrease(count - 1);
    }
  };
  return (
    <div>
      <div className="flex ">
        <button className="border border-gray-400 bg-white w-6" onClick={handleOnDecrease}>
          -
        </button>
        <div className="border border-gray-400 bg-white w-12 text-center">{count}</div>
        <button className="border border-gray-400 bg-white w-6" onClick={handleOnIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
