import { comma } from "../../../utils/convert";

const OrderedOption = ({ option }) => {
  return (
    <div className="selected-option">
      <div className="option-name">{option.optionName}</div>
      <div className="option-total">
      <div className="quantity">수량: {option.quantity}</div>
        <span>{comma(option.price)}원</span>
      </div>
    </div>
  );
};

export default OrderedOption;
