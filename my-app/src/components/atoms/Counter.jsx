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
    <div className="counter">
      <button
        className="decrease-button rounded-l-md w-4"
        onClick={handleOnDecrease}
      >
        -
      </button>
      <div className="count inline-block w-4 text-center">{count}</div>
      <button
        className="increase-button rounded-r-md w-4"
        onClick={handleOnIncrease}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
