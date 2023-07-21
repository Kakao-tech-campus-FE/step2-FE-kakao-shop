import { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const Counter = ({
  className,
  value, // 최초 수량 // 삭제: 리렌더링 방지를 위해 사용하지 않는다
  //=> 강의에서는 사용하지 않았지만 장바구니 페이지에서 Counter를 그래로 사용하다 보니
  // value를 받아주지 않고 useState(1)로 사용되어
  // 장바구니 진입 시 수량에 상관 없이 항상 1로 표현되는 문제가 발생하여 수정했다.
  onIncrease, // 수량 증가 함수
  onDecrease, // 수량 감소 함수
}) => {
  const [count, setCount] = useState(value);
  const handleOnIncrease = (num = 1) => {
    // setCount는 비동기 함수이기 때문에
    // 값을 잘 생각하여 코드를 작성해야 한다.
    // 예시 1
    setCount(count + num);
    onIncrease(count + num);
    // 예시 2
    // setCount((prev) => {
    //   onIncrease(prev + 1);
    //   return prev + 1;
    // })
  };
  const handleOnDecrease = (num = 1) => {
    setCount(count - num);
    onDecrease(count - num);
  };

  return (
    <div
      className={`${className} w-fit flex bg-white border rounded border-neutral-200`}
    >
      <button
        className="flex w-8 h-8 items-center justify-center"
        onClick={() => handleOnDecrease()}
        disabled={count <= 1}
      >
        <BsDashLg />
      </button>
      <div className="text-center items-center leading-8 justify-items-center w-16 h-8 border-x-[1px] border-neutral-200">
        {count}
      </div>
      <button
        className="flex w-8 h-8 items-center justify-center"
        onClick={() => handleOnIncrease()}
        disabled={count >= 100}
      >
        <BsPlusLg />
      </button>
    </div>
  );
};
export default Counter;
