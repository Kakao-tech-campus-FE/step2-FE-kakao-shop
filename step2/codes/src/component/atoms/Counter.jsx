import { useEffect, useState } from "react";
import Button from "../atoms/Button";

const Counter = ({
    quantity,
    optionId,
    onIncrease, //수량 증가 함수
    onDecrease, //수량 감소 함수
}) => {
    const [count, setCount] = useState(1);
    const [disabled, setDisabled] = useState(false);
    
    useEffect(() => {
        setCount(quantity);
        setDisabled(quantity <= 1); // 수량이 1개 이하인가 -> true -> disabled
    })

    const handelOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1, optionId);
        setDisabled(false);
        console.log()
    }
    
    const handelOnDecrease = () => {
        setCount(count -1);
        onDecrease(count - 1, optionId);
        setDisabled(count <= 2 ); 
    }    

    return (
        <div className="flex ">
            <Button className=" text-3xl border border-gray-400 text-center w-4 " disabled={disabled} onClick={handelOnDecrease}>-</Button>
            <div className="text-xl border-gray-400 border-t border-b text-center w-16">{count}</div>
            <Button className=" text-2xl border border-gray-400 text-center w-4" onClick={handelOnIncrease}>+</Button>
        </div>
    )
}

export default Counter;