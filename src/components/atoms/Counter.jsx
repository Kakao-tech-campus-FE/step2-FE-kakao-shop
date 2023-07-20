import {useEffect, useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import {BiMinus} from "react-icons/bi";

const NUMBER_REGEX = /^\d+$/

const Counter = ({
                     value,
                     handleOnChange,
                     className = ""
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
        if (!NUMBER_REGEX.test(e.target.value) || isNaN(input) || input <= 0) {
            console.log("한 개 이상은 구매해야 합니다.");
            setTempInput(1);
            handleOnChange(1);
            return;
        }

        if (input > 1000) {
            console.log("최대 1000개까지 구매할 수 있습니다.");
            setTempInput(1000);
            handleOnChange(1000);
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
            <button onClick={handleOnDecrease} className={"w-1/4 border border-light-gray-700 flex justify-center items-center"}><BiMinus/></button>
            <input className={`option-counter w-2/4 text-center `} value={tempInput} onBlur={validateInput} onChange={handleInput}></input>
            <button onClick={handleOnIncrease} className={"w-1/4 border border-light-gray-700 flex justify-center items-center"}><BsPlusLg/></button>
        </div>
    )
}

export default Counter;