import { comma } from "../../utils/convert";
import "../../styles/atoms/OptionList.css";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="flex flex-col gap-4 mb-4">
      {options.map((option, index) => (
        <div className="flex justify-between p-4">
          <li
            key={option.id}
            className="option"
            onClick={() => onClick(option)}
          >
            <span className="name text-xl">
              {index + 1}. {option.optionName}
            </span>
            <span className="price text-xl">{comma(option.price)}원</span>
          </li>
        </div>
      ))}
    </ol>
  );
};

export default OptionList;
