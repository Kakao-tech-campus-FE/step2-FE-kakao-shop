import { useCallback, useState } from "react";

const Counter = ({ onIncrease, onDecrease, value = 1 }) => {
  const [count, setCount] = useState(value);

  // 렌더링이 2번 되는 문제 어떻게 해결?
  const handleOnIncrease = useCallback(() => {
    setCount((prev) => {
      onIncrease(prev + 1);
      return prev + 1;
    });
  }, []);
  const handleOnDecrease = useCallback(() => {
    setCount((prev) => {
      if (prev === 0) {
        onDecrease(prev);
        return prev;
      }
      onDecrease(prev - 1);
      return prev - 1;
    });
  }, []);
  return (
    <span className="counter border rounded px-2 py-1 ">
      <button
        className="decrease-button p-1 text-center w-8"
        onClick={handleOnDecrease}
      >
        -
      </button>
      <span className="count inline-block border-x w-10 h-full text-center">
        {count}
      </span>
      <button
        className="increase-button p-1 text-center w-8"
        onClick={handleOnIncrease}
      >
        +
      </button>
    </span>
  );
};
export default Counter;
