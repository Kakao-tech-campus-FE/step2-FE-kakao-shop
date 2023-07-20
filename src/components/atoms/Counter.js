import { useState } from "react";

import Button from "./Button";

export default function Counter({ option, onClick }) {
  const [count, setCount] = useState(1);

  const handleIncreaseClick = () => {
    setCount((prevCount) => prevCount + 1);
    onClick(option, count + 1);
  };

  const handleDecreaseClick = () => {
    setCount((prevCount) => prevCount - 1);
    onClick(option, count - 1);
  };

  return (
    <div>
      <Button disabled={count > 1 ? false : true} onClick={handleDecreaseClick}>
        -
      </Button>
      <span>{count}</span>
      <Button onClick={handleIncreaseClick}>+</Button>
    </div>
  );
}
