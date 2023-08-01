import React, { memo, useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

function Counter({ value, onChange }) {
  const [count, setCount] = useState(value);
  const handleOnIncrease = () => {
    setCount(count + 1);
    onChange(count + 1, 1);
  };
  const handleOnDecrease = () => {
    setCount(count - 1);
    onChange(count - 1, -1);
  };
  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div className=" border-solid border-zinc-300 w-fit">
      <Button
        onClick={handleOnDecrease}
        disabled={count === 1}
        className=" w-7 h-7 text-xl items-center inline-flex bg-white border-0 text-zinc-600 cursor-pointer disabled:text-zinc-200"
      >
        ─
      </Button>
      <span className=" w-14 h-7 text-base items-center inline-flex bg-white border-solid border-0 border-x-[1px] justify-center border-zinc-300">
        {count}
      </span>
      <Button
        onClick={handleOnIncrease}
        className=" w-7 h-7 text-xl inline-flex items-center bg-white border-0 text-zinc-600 cursor-pointer "
      >
        +
      </Button>
    </div>
  );
}
export default memo(Counter);

// ⭐️ 연속된 비동기 함수 호출
// 동기 함수: 무조건 코드가 순차적으로 실행된다.
// 비동기 함수: 코드가 순차적으로 실행되지 않는다.
// setCount(prev => prev + 1)
// onIncrease(count): update된 count를 전달하지 못한다. -> count + 1을 전달해야 됨

// ⭐️ React.memo
// React.memo: props가 변경되지 않으면 리렌더링을 하지 않는다.
