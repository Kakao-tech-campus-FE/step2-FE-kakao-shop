import { comma } from "../../utils/convert";
import "./OptionList.css";
import React from "react";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <div
          key={option.id}
          className="option p-2 my-2 flex justify-between items-center"
          onClick={() => onClick(option)}
        >
          <span className="name max-w-[200px]">
            {index + 1}. {option.optionName}
          </span>
          <span className="px-2 price">{comma(option.price)}원</span>
        </div>
      ))}
    </ol>
  );
};

export default OptionList;
