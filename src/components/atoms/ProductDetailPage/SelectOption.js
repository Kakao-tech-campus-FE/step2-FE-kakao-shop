import { comma } from "../../../utils/convert";

const SelectOption = ({ option, onSelectOption }) => {
  return (
    <li
      className="option"
      onClick={() => onSelectOption(option)}
      style={{ cursor: "pointer" }}
    >
      <div>{option.optionName}</div>
      <span>{comma(option.price)}원</span>
    </li>
  );
};

export default SelectOption;
