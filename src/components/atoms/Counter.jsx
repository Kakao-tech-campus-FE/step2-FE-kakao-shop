const Counter = ({ onIncrease, onDecrease, value }) => {
  const handleOnIncrease = () => {
    onIncrease(value + 1);
    return value + 1;
  };
  const handleOnDecrease = () => {
    if (value === 0) return 0;
    onDecrease(value - 1);
    return value - 1;
  };
  return (
    <span className="counter border rounded px-2 py-1 ">
      <button
        className="decrease-button p-1 text-center w-8"
        onClick={handleOnDecrease}
      >
        -
      </button>
      <span className="count inline-block border-x w-10 h-full text-center">
        {value}
      </span>
      <button
        className="increase-button p-1 text-center w-8"
        onClick={handleOnIncrease}
      >
        +
      </button>
    </span>
  );
};
export default Counter;
