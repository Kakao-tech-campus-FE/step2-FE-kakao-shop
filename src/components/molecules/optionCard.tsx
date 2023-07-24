import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Price from '../atoms/price';
import Counter from './counter';

interface OptionCardProps {
  optionName: string;
  quantity: number;
  optionTotalPrice: number;
  decreaseDisabled?: boolean;
  increaseDisabled?: boolean;

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
  decreaseDisabled = false,
  increaseDisabled = false,
}: OptionCardProps) {
  return (
    <div className="rounded py-4">
      <div className="mb-2 flex flex-row justify-between">
        <h3>{optionName}</h3>
        <div>
          <button
            className="ml-2"
            onClick={handleDeleteOption}
          >
            <FontAwesomeIcon
              icon={icon({ name: 'xmark', style: 'solid' })}
              title="삭제"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Counter
          count={quantity}
          handleDecrease={handleQuantityDecrease}
          handleIncrease={handleQuantityIncrease}
          decreaseDisabled={decreaseDisabled}
          increaseDisabled={increaseDisabled}
        />
        <p><Price price={optionTotalPrice} /></p>
      </div>
    </div>
  );
}
