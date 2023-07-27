import { comma } from "../../../utils/convert";
import { useMatch } from "react-router-dom";

const Quantity = ({
  isEditAble,
  quantity,
  handleDecrease,
  handleQuantityChange,
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
        onChange={handleQuantityChange}
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
  const isCartPage = useMatch("/cart");
  const isProductPage = useMatch("/product/:productId");
  const isEditAble = !!isCartPage || !!isProductPage;

  const handleQuantityChange = (e) => onQuantityChange(option.id, +e.target.value)

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
          onQuantityChange={handleQuantityChange}
          handleIncrease={handleIncreaseQuantity}
        />
        <span>{comma(option.price)}원</span>
      </div>
    </div>
  );
};

export default SelectedOption;
