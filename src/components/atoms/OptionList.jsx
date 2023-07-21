import { comma } from "../../utils/convert";
import "./OptionList.css";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <div key={option.id} className="option" onClick={() => onClick(option)}>
          <span className="name">
            {index + 1}. {option.optionName}
          </span>
          <span className="price">{comma(option.price)}원</span>
        </div>
      ))}
    </ol>
  );
};

export default OptionList;
