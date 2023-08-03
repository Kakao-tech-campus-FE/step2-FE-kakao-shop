import { comma } from "../../utils/convert";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="w-full mb-2 border border-gray-300">
      {options.map((option, index) => (
        <li
          key={option.id}
          className="border p-2"
          onClick={() => onClick(option)}
        >
          <div className="font-300">
            {index + 1}. {option.optionName}
          </div>
          <div className=" ml-5">{comma(option.price)}원</div>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;