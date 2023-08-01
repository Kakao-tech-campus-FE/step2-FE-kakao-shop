import { useState } from "react";

/**
 * @param  onIncrease - 옵션들 수량 조절 + 
 * @param  onDecrease - 옵션들 수량 조절 -
 * @return  - 옵션들의 수량을 조정
 * 상품들 옵션 수량 선택하는 counter 
 */ 
const Counter =({
    onIncrease,
    onDecrease,
    quantity,
}) => {
    const [count, setCount] = useState(quantity);

    const handleOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1);
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
    )
};

export default Counter;