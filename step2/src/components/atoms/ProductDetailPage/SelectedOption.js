import { comma } from "../../../utils/convert";
import { useLocation } from "react-router-dom";

const Quantity = ({
  isEditAble,
  option,
  quantity,
  handleDecrease,
  onQuantityChange,
  handleIncrease,
}) => {
  return isEditAble ? (
    <div className="quantity">
      <button className="btn-quantity" onClick={handleDecrease}>
        -
      </button>
      <input
        className="option-quantity"
        value={quantity}
        onChange={(e) => onQuantityChange(option.id, +e.target.value)}
      />
      <button className="btn-quantity" onClick={handleIncrease}>
        +
      </button>
    </div>
  ) : (
    <div className="quantity">수량: {quantity}</div>
  );
};

const SelectedOption = ({ option, quantity, onQuantityChange, onRemove }) => {
  const location = useLocation();
  const isEditAble = location.pathname !== "/order";

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(option.id, quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    onQuantityChange(option.id, quantity + 1);
  };

  return (
    <div className="selected-option">
      {isEditAble && (
        <button
          className="btn-remove-option"
          onClick={() => onRemove(option.id)}
        >
          X
        </button>
      )}
      <div className="option-name">{option.optionName}</div>
      <div className="option-total">
        <Quantity
          isEditAble={isEditAble}
          option={option}
          quantity={quantity}
          handleDecrease={handleDecreaseQuantity}
          onQuantityChange={onQuantityChange}
          handleIncrease={handleIncreaseQuantity}
        />
        <span>{comma(option.price)}원</span>
      </div>
    </div>
  );
};

export default SelectedOption;
