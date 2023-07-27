import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Counter = ({ quantity = 1, onIncrease, onDecrease }) => {
  const [count, setCount] = useState(quantity);

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
    <div className="flex w-[130px] justify-between rounded-sm border border-gray-300 bg-white text-[18px]">
      <button
        className={`border-r border-gray-300 p-1 ${
          count > 1 ? "text-black" : "text-gray-300"
        }`}
        onClick={handleOnDecrease}
      >
        <AiOutlineMinus />
      </button>
      <span>{count}</span>
      <button
        className="border-l border-gray-300 p-1"
        onClick={handleOnIncrease}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Counter;
