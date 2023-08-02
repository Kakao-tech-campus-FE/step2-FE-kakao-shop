import { useState } from "react";
import { styled } from "styled-components";

// 최초 수량 + 수량 증가 함수 + 수량 감소 함수
const Counter = ({onIncrease, onDecrease, initialCount}) => {
    const [count, setCount] = useState(initialCount);

    const handleOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1);
    }

    const handleOnDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
            onDecrease(count - 1);
        }
    }

    return (
        <CounterContainer>
            <button onClick={handleOnDecrease}>-</button>
            <div className="count">{count}</div>
            <button onClick={handleOnIncrease}>+</button>
        </CounterContainer>
    );
};

export default Counter;

const CounterContainer = styled.div`
    border : 1px solid #c5c5c5;
    display : flex;
    box-sizing : border-box;

    & > div {
        border-left : 1px solid #c5c5c5;
        border-right : 1px solid #c5c5c5;
        width : 17px;
        padding : 0 12px;
        text-align: center;
        background-color : #fff;
    }
    & > button {
        border : none;
        cursor: pointer;
        transition: all 0.5s;
    }
    & > button:hover {
        background-color: #bababa;
    }
`