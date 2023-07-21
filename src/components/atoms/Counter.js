import Button from "./Button";

export default function Counter({ value, onClick }) {
  const handleIncreaseClick = () => {
    onClick(value, value.quantity + 1);
  };

  const handleDecreaseClick = () => {
    onClick(value, value.quantity - 1);
  };

  return (
    <div className="inline-block bg-white border">
      <Button
        className="border w-6"
        disabled={value.quantity > 1 ? false : true}
        onClick={handleDecreaseClick}
      >
        -
      </Button>
      <span className="inline-block w-16">{value.quantity}</span>
      <Button className="border w-6" onClick={handleIncreaseClick}>
        +
      </Button>
    </div>
  );
}
