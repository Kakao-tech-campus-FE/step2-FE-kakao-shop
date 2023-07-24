import CounterBtn from "../atoms/CounterBtn";

const Counter = ({ value, onDecrease, onIncrease }) => {
  const handleOnDecrease = () => {
    if (value > 1) {
      onDecrease(value - 1);
    }
  };

  const handleOnIncrease = () => {
    onIncrease(value + 1);
  };

  return (
    <>
      <CounterBtn onClick={handleOnDecrease}>-</CounterBtn>
      <span>{value}</span>
      <CounterBtn onClick={handleOnIncrease}>+</CounterBtn>
    </>
  );
};

export default Counter;
