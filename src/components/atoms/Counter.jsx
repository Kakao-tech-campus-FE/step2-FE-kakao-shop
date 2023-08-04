import { useState } from 'react';
import Button from './Button';
import Container from './Container';
import Text from './Text';

const Counter = ({ onIncrease, onDecrease, initValue = 1 }) => {
    const [count, setCount] = useState(initValue);

    const handleOnIncrease = () => {
        setCount((prev) => {
            onIncrease(prev + 1);
            return prev + 1;
        });
    };

    const handleOnDecrease = () => {
        if (count <= 0) {
            return;
        }
        setCount((prev) => {
            onDecrease(prev - 1);
            return prev - 1;
        });
    };
    return (
        <div className="counter flex justify-start gap-4">
            <Button className="counter" onClick={handleOnDecrease}>
                -
            </Button>
            <Text className="count">{count}</Text>
            <Button className="counter" onClick={handleOnIncrease}>
                +
            </Button>
        </div>
    );
};

export default Counter;
