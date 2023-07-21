import { comma } from "../../Utils/convert";
import "../../Styles/OptionList.css";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li key={option.id} className="option" onClick={() => onClick(option)}>
          <div className="name">
            {index + 1}, {option.optionName}
          </div>
          <div className="price">{comma(option.price)}원</div>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
