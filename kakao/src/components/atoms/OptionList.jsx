import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li key={option.id} className="option" onClick={() => onClick(option)}>
          <span className="option-name">
            {/* {index + 1}. */}
            {option.optionName}
          </span>
          <span className="option-price">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
