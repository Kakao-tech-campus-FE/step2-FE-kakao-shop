import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface CounterProps {
  count: number;
  decreaseDisabled?: boolean;
  increaseDisabled?: boolean;

  handleDecrease: () => void;
  handleIncrease: () => void;
}

export default function Counter({
  count,
  handleDecrease,
  handleIncrease,
  decreaseDisabled = false,
  increaseDisabled = false,
}: CounterProps) {
  return (
    <div className="flex h-6 flex-row items-center gap-4">
      <button
        className="rounded-sm border border-stone-300 px-2
          disabled:bg-stone-300"
        onClick={handleDecrease}
        disabled={decreaseDisabled}
      >
        <FontAwesomeIcon
          icon={icon({ name: 'minus', style: 'solid' })}
          size="2xs"
          title="수량 빼기"
        />
      </button>
      <p>{count}</p>
      <button
        className="rounded-sm border border-stone-300 px-2
          disabled:bg-stone-300"
        onClick={handleIncrease}
        disabled={increaseDisabled}
      >
        <FontAwesomeIcon
          icon={icon({ name: 'plus', style: 'solid' })}
          size="2xs"
          title="수량 추가"
        />
      </button>
    </div>
  );
}
