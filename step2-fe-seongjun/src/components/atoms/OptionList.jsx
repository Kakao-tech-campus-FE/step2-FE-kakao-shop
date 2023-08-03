import { useState } from "react";
import {comma} from "../../utils/convert"

const OptionList = ({ options, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-2 px-4 text-black rounded-lg inline-block">
      <button className="w-full text-lg" onClick={() => setIsOpen(!isOpen)}>
        옵션 선택
        <span className="float-right">▼</span>
      </button>
      {isOpen && (
        <ol className="option-list">
          {options.map((option, index) => (
            <li
              key={option.id}
              className="option"
              onClick={() => onClick(option)}
            >
              <div className="py-2">
                <span className="mr-4">{index + 1}.</span>
                <span className="name font-semibold">
                  {option.optionName} -{" "}
                </span>
                <span className="price">{comma(option.price)}원</span>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default OptionList;