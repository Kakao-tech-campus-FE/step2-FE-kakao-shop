import { comma } from "../../utils/comma";
import "../../styles/atoms/OptionList.css";

const OptionList = ({ option, onClick }) => {
  return (
    <ol className="option-list">
      {OptionList.map((option, index) => (
        <li key={option.id} className="option" onClick={() => onClick(option)}>
          <span className="name">
            {index + 1}.{option.optionName}
          </span>
          <span className="price">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
