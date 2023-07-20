import { comma } from "../../../utils/convert";

const SelectedOption = ({ option, quantity, onQuantityChange, onRemove }) => {
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
      <button className="btn-remove-option" onClick={() => onRemove(option.id)}>
        X
      </button>
      <div className="option-name">{option.optionName}</div>
      <div className="option-total">
        <div className="quantity">
          <button className="btn-quantity" onClick={handleDecreaseQuantity}>
            -
          </button>
          <input
            className="option-quantity"
            value={quantity}
            onChange={(e) => onQuantityChange(option.id, +e.target.value)}
          />
          <button className="btn-quantity" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <span>{comma(option.price)}원</span>
      </div>
    </div>
  );
};

export default SelectedOption;
