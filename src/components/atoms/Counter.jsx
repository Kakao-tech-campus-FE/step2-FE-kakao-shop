import {useEffect, useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import {BiMinus} from "react-icons/bi";

const NUMBER_REGEX = /^\d+$/
/**
 *
 * @param value counter의 값
 * @param handleOnChange counter의 값이 변경될 때 실행되는 함수
 * @param className counter의 className
 * @param underBound counter의 최소값
 * @param handleOnUnderBound counter의 최소값 이하로 내려갔을 때 실행되는 함수
 * @param upperBound counter의 최대값
 * @param handleOnUpperBound counter의 최대값 이상으로 올라갔을 때 실행되는 함수
 * @returns {JSX.Element}
 * @constructor
 */
const Counter = ({
                     value,
                     handleOnChange,
                     className = "",
                     underBound = 1,
                     handleOnUnderBound = () => {
                         console.log("underflow")
                     },
                     upperBound = 1000,
                     handleOnUpperBound = () => {
                         console.log("overflow")
                     },
                 }) => {


    const handleOnIncrease = () => {
        handleOnChange(value + 1);
    }
    const handleOnDecrease = () => {
        if (value <= 1) {
            return;
        }
        handleOnChange(value - 1);
    }

    const [tempInput, setTempInput] = useState(value)

    const validateInput = (e) => {
        const input = parseInt(e.target.value);
        if (!NUMBER_REGEX.test(e.target.value) || isNaN(input) || input < underBound) {
            console.log("한 개 이상은 구매해야 합니다.");
            setTempInput(underBound);
            handleOnChange(underBound);
            return;
        }

        if (input > upperBound) {
            console.log("최대 1000개까지 구매할 수 있습니다.");
            setTempInput(underBound);
            handleOnChange(upperBound);
            return;
        }
        handleOnChange(input);
    }


    useEffect(() => {
        setTempInput(value)
    }, [value])

    const handleInput = (e) => {
        setTempInput(e.target.value);
    }


    return (
        <div className={`counter w-full flex flex-row ${className}`}>
            <button onClick={handleOnDecrease}
                    className={"w-1/4 border border-light-gray-700 flex justify-center items-center"}><BiMinus/>
            </button>
            <input className={`option-counter w-2/4 text-center `} value={tempInput} onBlur={validateInput}
                   onChange={handleInput}></input>
            <button onClick={handleOnIncrease}
                    className={"w-1/4 border border-light-gray-700 flex justify-center items-center"}><BsPlusLg/>
            </button>
        </div>
    )
}

export default Counter;