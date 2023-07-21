import { useEffect, useState } from "react";

const Counter = ({ onIncrease, onDecrease, className, num }) => {
  const [count, setCount] = useState(1);
  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };
  const handleOnDncrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
    onDecrease(count - 1);
  };
  useEffect(() => {
    if (num) {
      setCount(num);
    }
  }, []);
  return (
    <div className={`counter ${className} border-2 border-slate-100`}>
      <button
        onClick={handleOnDncrease}
        className="border-slate-100 border-r-2 w-10"
      >
        -
      </button>
      <span className="count inline-block w-14">{count}</span>
      <button
        onClick={handleOnIncrease}
        className="border-slate-100 border-l-2 w-10"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
