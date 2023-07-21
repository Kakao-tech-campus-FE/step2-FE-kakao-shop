import Button from "./Button";

export default function Counter({ value, onClick }) {
  const handleIncreaseClick = () => {
    onClick(value, value.quantity + 1);
  };

  const handleDecreaseClick = () => {
    onClick(value, value.quantity - 1);
  };

  return (
    <div>
      <Button
        disabled={value.quantity > 1 ? false : true}
        onClick={handleDecreaseClick}
      >
        -
      </Button>
      <span>{value.quantity}</span>
      <Button onClick={handleIncreaseClick}>+</Button>
    </div>
  );
}
