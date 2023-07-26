const Counter = ({
    value, // 수량
    onChange, // 수량 변화 함수
}) => {
    const handleOnIncrease = () => {
        onChange(value + 1);
    };

    const handleOnDecrease = () => {
        onChange(value - 1);
    };

    return (
        <div className="counter d-flex">
            <button onClick={handleOnDecrease}>-</button>
            <span className="count d-block px-2">{value}</span>
            <button onClick={handleOnIncrease}>+</button>
        </div>
    );
};

export default Counter;
