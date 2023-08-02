import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const NUMBER_REGEX = /^\d+$/;
/**
 *
 * @param value counter의 값
 * @param handleOnChange counter의 값이 변경될 때 실행되는 함수
 * @param className counter의 className
 * @param lowerBound counter의 최소값
 * @param handleOnLowerBound counter의 최소값 이하로 내려갔을 때 실행되는 함수
 * @param upperBound counter의 최대값
 * @param handleOnUpperBound counter의 최대값 이상으로 올라갔을 때 실행되는 함수
 * @returns {JSX.Element}
 * @constructor
 */
const Counter = ({
  value,
  handleOnChange,
  className = "",
  underBound: lowerBound = 1,
  handleOnLowerBound = () => {
    console.log("underflow");
  },
  upperBound = 1000,
  handleOnUpperBound = () => {
    console.log("overflow");
  },
}) => {
  const handleOnIncrease = () => {
    if (value >= upperBound) {
      handleOnUpperBound();
      return;
    }
    handleOnChange(value + 1);
  };
  const handleOnDecrease = () => {
    if (value <= 1) {
      handleOnLowerBound();
      return;
    }
    handleOnChange(value - 1);
  };

  const [tempInput, setTempInput] = useState(value);

  const validateInput = (e) => {
    const input = parseInt(e.target.value);
    if (
      !NUMBER_REGEX.test(e.target.value) ||
      isNaN(input) ||
      input < lowerBound
    ) {
      handleOnLowerBound();
      setTempInput(lowerBound);
      handleOnChange(lowerBound);
      return;
    }

    if (input > upperBound) {
      handleOnUpperBound();
      setTempInput(lowerBound);
      handleOnChange(upperBound);
      return;
    }
    handleOnChange(input);
  };

  useEffect(() => {
    setTempInput(value);
  }, [value]);

  const handleInput = (e) => {
    setTempInput(e.target.value);
  };

  return (
    <div className={`counter flex w-full flex-row ${className}`}>
      <button
        onClick={handleOnDecrease}
        className={
          "flex w-1/4 items-center justify-center border border-light-gray-700"
        }
      >
        <BiMinus />
      </button>
      <input
        className={`option-counter w-2/4 text-center `}
        value={tempInput}
        onBlur={validateInput}
        onChange={handleInput}
      ></input>
      <button
        onClick={handleOnIncrease}
        className={
          "flex w-1/4 items-center justify-center border border-light-gray-700"
        }
      >
        <BsPlusLg />
      </button>
    </div>
  );
};

export default Counter;
