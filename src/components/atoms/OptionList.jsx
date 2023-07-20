import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => {
        return (
          <li
            className="option"
            key={option.id}
            onClick={() => onClick(option)}
          >
            <span className="name">{option.optionName}</span>
            <span className="price">{comma(option.price)}원</span>
          </li>
        );
      })}
    </ol>
  );
};
export default OptionList;
