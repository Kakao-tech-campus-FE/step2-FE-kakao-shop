import { useState } from "react";
import { Button, ButtonGroup } from '@mui/material';

const Counter = ({
    initCount,
    onIncrease, // 수량 증가 함수
    onDecrease, // 수량 감소 함수
}) => {
    const [count, setCount] = useState(initCount);

    const handleOnIncrease = () => {
        setCount(count + 1);
        onIncrease(count + 1);
    }

    const handleOnDecrease = () => {
        setCount(count - 1);
        onDecrease(count - 1);
    }

    return (
        <ButtonGroup size="small" variant="outlined" aria-label="small button group">
            <Button onClick={handleOnDecrease} disabled={count <= 0}>-</Button>
            <Button className="count">{count}</Button>
            <Button onClick={handleOnIncrease}>+</Button>
        </ButtonGroup>
    );
}

export default Counter;