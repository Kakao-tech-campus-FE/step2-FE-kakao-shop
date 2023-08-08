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
    <div className=" w-fit border border-solid border-zinc-300">
      <Button
        onClick={handleOnDecrease}
        disabled={count === 1}
        className=" inline-flex h-7 w-7 cursor-pointer items-center border-0 bg-white text-xl text-zinc-600 disabled:text-zinc-200"
      >
        ─
      </Button>
      <span className=" inline-flex h-7 w-14 items-center justify-center border-0 border-x-[1px] border-solid border-zinc-300 bg-white text-base">
        {count}
      </span>
      <Button
        onClick={handleOnIncrease}
        className=" inline-flex h-7 w-7 cursor-pointer items-center border-0 bg-white text-xl text-zinc-600 "
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
