import { comma } from "../../utils/convert";
import "../../styles/atoms/OptionList.css";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list space-y-4">
      {options.map((option, index) => (
        <li
          key={option.id}
          className="option border rounded-md p-4 cursor-pointer"
          onClick={() => onClick(option)}
        >
          <span className="name text-lg font-semibold">
            {index + 1}.{option.optionName}
          </span>
          <span className="price text-sm text-gray-600">
            {comma(option.price)}원
          </span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
