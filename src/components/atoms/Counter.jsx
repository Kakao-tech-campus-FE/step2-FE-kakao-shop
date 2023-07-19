import { useState,useEffect } from "react";

const Counter = ({
    value,
    onIncrease, //수량 증가 함수
    onDecrease, //수량 감소 함수
}) => {
    
    const [count, setCount] = useState(value);
   
    const handleOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1);
    }
    const handleOnDecrease = () => {
        setCount(count - 1);
        onDecrease(count - 1);
    }
    return (
        <div>
            <button onClick={handleOnDecrease}>-</button>
            <span>{count}</span>
            <button onClick={handleOnIncrease}>+</button>

        </div>
    );
};

export default Counter;