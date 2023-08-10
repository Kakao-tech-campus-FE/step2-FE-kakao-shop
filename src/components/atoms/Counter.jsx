import { useState } from "react";
import Button from "./Button";

const Counter = ({ onIncrease, onDecrease }) => {
  const [count, setCount] = useState(1);

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };

  const handleOnDecrease = () => {
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div className="counter">
      <Button className="btn-counter px-3" onClick={handleOnDecrease}>
        -
      </Button>
      <span className="px-6">{count}</span>
      <Button className="btn-counter px-2" onClick={handleOnIncrease}>
        +
      </Button>
    </div>
  );
};

export default Counter;
