/*eslint-disable react/prop-types */
import { useState } from "react";

// Counter components use both in Cart, ProductDetailPage
// OnIncrease, OnDecrase is function
const Counter = ({ onIncrease, onDecrease, quantity = 1 }) => {
  const [count, setCount] = useState(quantity);

  const handleClickIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleClickDecrease = () => {
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div className="counter float-left w-32">
      <button
        className="float-left w-7 h-7 border-2 border-orange-300/75"
        onClick={handleClickDecrease}
      >
        -
      </button>
      <span className="count inline-block w-16 text-center">{count}</span>
      <button
        className="float-right w-7 h-7 border-2 border-orange-300/75"
        onClick={handleClickIncrease}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
