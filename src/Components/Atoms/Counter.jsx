import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const Counter = ({
  quantity = 1,
  onIncrease, // 수량 증가 함수
  onDecrease, // 수량 감소 함수
}) => {
  const [count, setCount] = useState(quantity);

  const handleOnIncrease = () => {
    setCount(count + 1);
    onIncrease(count + 1);
  };
  const handleOnDecrease = () => {
    if (count - 1 <= 0) {
      alert("0개보다 많아야 합니다.");
      return;
    }
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div className="h-[30px] rounded my-3 mr-1 border bg-white px-2 items-center">
      <button onClick={handleOnDecrease} className="pr-2 align-middle">
        <BiMinus />
      </button>
      <span className="border-x px-4">{count}</span>
      <button onClick={handleOnIncrease} className="pl-2 align-middle">
        <BiPlus />
      </button>
    </div>
  );
};

export default Counter;
