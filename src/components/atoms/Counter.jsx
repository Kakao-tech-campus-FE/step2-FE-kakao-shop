import { useState } from "react";

const Counter = ({
  value = 1,
  onIncrease,
  onDecrease,
  btnClassName = "",
  cntClassName = "",
}) => {
  const [count, setCount] = useState(value);

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleOnDecrease = () => {
    if (count === 1) return;
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div className="join counter">
      <button
        onClick={handleOnDecrease}
        className={`btn btn-sm join-item min-h-0 border-gray-300 bg-white ${btnClassName}`}
      >
        -
      </button>
      <div
        className={`grid join-item place-items-center border border-gray-300 bg-white ${cntClassName}`}
      >
        {count}
      </div>
      <button
        onClick={handleOnIncrease}
        className={`btn btn-sm join-item min-h-0 border-gray-300 bg-white ${btnClassName}`}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
