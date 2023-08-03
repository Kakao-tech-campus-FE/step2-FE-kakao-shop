import { useState } from "react";

/** 카운터 컴포넌트
 *
 * @param {number} value - 카운터 값
 * @param {function} onIncrease - 카운터 증가 이벤트
 * @param {function} onDecrease - 카운터 감소 이벤트
 * @param {string} btnClassName - 버튼 클래스
 * @param {string} cntClassName - 카운터 클래스
 * @returns {JSX.Element}
 */
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
