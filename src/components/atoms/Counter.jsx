import { useState } from "react";

const Counter = ({ quantity, onIncrease, onDecrease }) => {
  const [count, setCount] = useState(
    quantity && typeof quantity === "number" ? quantity : 1
  );

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleOnDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      onDecrease(count - 1);
    }
  };

  return (
    <div className="flex justify-center text-center w-32 h-8 my-2 border rounded-md">
      <button onClick={handleOnDecrease} className="w-1/2 bg-yellow-300">
        -
      </button>
      <span className="mt-1 mx-5">{count}</span>
      <button onClick={handleOnIncrease} className="w-1/2 bg-yellow-300">
        +
      </button>
    </div>
  );
};

export default Counter;