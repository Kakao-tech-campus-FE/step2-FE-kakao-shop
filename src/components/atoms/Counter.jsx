import { useEffect, useState } from "react";

const Counter = ({
    value, // 최초값
    onIncrease,
    onDecrease,
    optionId,
}) => {
    const [count, setCount] = useState(value);
    const handleOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1, optionId);
    };

    const handleOnDecrease = () => {
        setCount(count - 1);
        onDecrease(count - 1, optionId);
    };

    useEffect(() => {
        if(value > count) {
            handleOnIncrease();
        } else if(value < count) {
            handleOnDecrease();
        }
    }, [value]);

    return (
        <span>
            <button onClick={handleOnDecrease} style={{borderColor: '#D8D8D8', outline: 'none'}} disabled={count === 1}>-</button>
            <span style={{padding: '0.16em 0.4em', border: '1px solid #D8D8D8'}}>{count}</span>
            <button onClick={handleOnIncrease} style={{borderColor: '#D8D8D8', outline: 'none'}}>+</button>
        </span>
    )
}; 

export default Counter;