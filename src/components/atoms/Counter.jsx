import { useState } from "react";

const Counter = ({
  // 삭제: 리렌더링 방지를 위해 사용하지 않는다 value, // 최초 수량
  onIncrease, // 수량 증가 함수
  onDecrease, // 수량 감소 함수
}) => {
  const [count, setCount] = useState(value);
  const handleOnIncrease = () => {
    // setCount는 비동기 함수이기 때문에
    // 값을 잘 생각하여 코드를 작성해야 한다.
    // 예시 1
    setCount(count + 1);
    onIncrease(count + 1);
    // 예시 2
    // setCount((prev) => {
    //   onIncrease(prev + 1);
    //   return prev + 1;
    // })
  };
  const handleOnDecrease = () => {
    setCount(count - 1);
    onDecrease(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={handleOnDecrease}>-</button>
      <span className="count">{count}</span>
      <button onClick={handleOnIncrease}>+</button>
    </div>
  );
};
export default Counter;
