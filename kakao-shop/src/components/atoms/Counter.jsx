import { GoPlus, GoDash } from 'react-icons/go';
import { useState } from 'react';

/**
 * 버튼으로 수량을 조절할 수 있는 카운터 컴포넌트
 *
 * @param {number} value 최초 수량
 * @param {Function} onIncrease 수량 증가 시 호출되는 함수
 * @param {Function} onDecrease 수량 감소 시 호출되는 함수
 */
const Counter = ({ value, onIncrease, onDecrease }) => {
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
    <div className="flex bg-white">
      {/* 감소 버튼 수량 1인 경우 비활성화 효과 주기 */}
      <button
        onClick={handleOnDecrease}
        className={`border border-solid border-slate-300 px-1 rounded-sm ${count === 1 ? 'cursor-default' : ''}`}
      >
        <GoDash size="20" color={count === 1 ? 'lightgray' : 'gray'} />
      </button>
      <span className="count border border-solid border-y-slate-300 border-x-slate-200 px-3 py-1 text-sm">{count}</span>
      <button onClick={handleOnIncrease} className="border border-solid border-slate-300 px-1 rounded-sm">
        <GoPlus size="20" color="gray" />
      </button>
    </div>
  );
};

export default Counter;
