import Button from '../atoms/button';
import Price from '../atoms/price';

interface OptionCardProps {
  optionName: string;
  quantity: number;
  optionTotalPrice: number;

  handleQuantityDecrease: () => void;
  handleQuantityIncrease: () => void;
  handleDeleteOption: () => void;
}

export default function OptionCard({
  optionName,
  quantity,
  optionTotalPrice,
  handleQuantityDecrease,
  handleQuantityIncrease,
  handleDeleteOption,
}: OptionCardProps) {
  return (
    <div className="border border-stone-300 px-4 py-2">
      <h3>{optionName}</h3>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Button onClick={handleQuantityDecrease}>-</Button>
          <p>{quantity}</p>
          <Button onClick={handleQuantityIncrease}>+</Button>
        </div>
        <p><Price price={optionTotalPrice} /></p>
      </div>
      <div className="flex flex-row justify-end">
        <div className="w-12">
          <Button onClick={handleDeleteOption}>삭제</Button>
        </div>
      </div>
    </div>
  );
}
