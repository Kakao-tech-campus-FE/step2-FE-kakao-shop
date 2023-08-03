import { comma } from "../../utils/convert";
import "../../styles/atoms/OptionList.css";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option) => (
        <li
          key={option.id}
          onClick={() => onClick(option)}
        >
          <h4 className="name font-bold">{option.optionName}</h4>
          <span className="price font-normal">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;