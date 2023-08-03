import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li
          key={option.id}
          className="option border p-2"
          onClick={() => onClick(option)}
        >
          <div className="name font-bold">
            {index + 1}. {option.optionName}
          </div>
          <div className=" ml-5">{comma(option.price)}원</div>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
