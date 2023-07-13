import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => {
        <li className="option" key={option.id} onClick={() => onClick(option)}>
          <span className="name">
            {index + 1}. {option.optionName}
          </span>
          <span className="price">{comma(option.price)}원</span>
        </li>;
      })}
    </ol>
  );
};
export default OptionList;
