import { comma } from "../../utils/convert";

// 옵션 선택 영역
const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option) => (
        <li
          key={option.id}
          className="option border-2 border-slate-300"
          onClick={() => onClick(option)}
        >
          <h4 className="name font-semibold">{option.optionName}</h4>
          <span className="price font-normal">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
