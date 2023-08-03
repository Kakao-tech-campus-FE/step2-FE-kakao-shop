import { useEffect, useState } from "react";
import Button from "../atoms/Button";

const Counter = ({
    option,
    onIncrease, //수량 증가 함수
    onDecrease, //수량 감소 함수
}) => {
    const [count, setCount] = useState(option.quantity);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setCount(option.quantity);
        setDisabled(option.quantity <= 1); // 수량이 1개 이하인가 -> true -> disabled
    },[option.quantity])

    const handelOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1, option);
        setDisabled(false);
    }
    
    const handelOnDecrease = () => {
        setCount(count -1);
        onDecrease(count - 1, option);
        setDisabled(count <= 1 );
    }    

    return (
        <div className="flex w-24 h-8">
            <Button className=" text-3xl border border-slate-300 flex items-center justify-center w-8" disabled={disabled} onClick={handelOnDecrease}>-</Button>
            <div className="text-xl border-slate-300 border-t border-b flex items-center justify-center w-16">{count}</div>
            <Button className=" text-2xl border border-slate-300 flex items-center justify-center w-8" onClick={handelOnIncrease}>+</Button>
        </div>
    )
}

export default Counter;