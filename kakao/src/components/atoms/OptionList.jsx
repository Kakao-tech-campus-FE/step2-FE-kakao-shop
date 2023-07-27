import { comma } from "../../utils/convert";
import "../../styles/atoms/OptionList.css";

const OptionList = ({ options, onClick }) => {
  return (
    <div className="option-list">
      <ol className="list">
        {options.map((option) => (
          <li
            key={option.id}
            className="option-item"
            onClick={() => onClick(option)}
          >
            <span className="option-name">
              {/* {index + 1}. */}
              {option.optionName}
            </span>
            <span className="option-price">{comma(option.price)}원</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default OptionList;
