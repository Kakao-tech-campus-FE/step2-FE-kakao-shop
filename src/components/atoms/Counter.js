import Button from "components/atoms/Button.js";

export default function Counter({ value, setCount }) {
  const handlePlusClick = () => {
    setCount(value, value.quantity + 1);
  };

  const handleMinusClick = () => {
    setCount(value, value.quantity - 1);
  };

  return (
    <div className="inline-block bg-white border">
      <Button
        className="border w-6"
        disabled={value.quantity > 1 ? false : true}
        onClick={handleMinusClick}
      >
        -
      </Button>
      <span className="inline-block w-16">{value.quantity}</span>
      <Button className="border w-6" onClick={handlePlusClick}>
        +
      </Button>
    </div>
  );
}
