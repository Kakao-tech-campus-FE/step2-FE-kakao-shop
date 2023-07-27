import { comma } from "../../utils/convert";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const OptionList = ({ options, onClick, optionMenu, setOptionMenu }) => {
  const handleOptionMenu = () => {
    setOptionMenu((prev) => !prev);
  };

  return (
    <div
      className={`mt-4 cursor-pointer rounded-sm border ${
        optionMenu ? "border-gray-500" : "border-gray-300"
      }`}
    >
      <div
        className="relative bg-[#fafafa] p-3 text-[#222]"
        onClick={handleOptionMenu}
      >
        <span>상품선택</span>{" "}
        {optionMenu ? (
          <BsChevronUp className="absolute right-4 top-4 inline" />
        ) : (
          <BsChevronDown className="absolute right-4 top-4 inline" />
        )}
      </div>
      {optionMenu && (
        <ol>
          {" "}
          {options.map((option, index) => (
            <li
              key={option.id}
              onClick={() => onClick(option)}
              className="border-b p-3 text-[14px]"
            >
              <span>
                {index + 1}. {option.optionName}
              </span>
              <p>{comma(option.price)}원</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default OptionList;
