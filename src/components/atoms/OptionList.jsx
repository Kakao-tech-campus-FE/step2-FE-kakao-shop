import { comma } from "../../utils/convert";
import "./OptionList.css";
import React from "react";

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <div
          key={option.id}
          className="option my-2 flex justify-between items-center"
          onClick={() => onClick(option)}
        >
          <span className="name">
            {index + 1}. {option.optionName}
          </span>
          <span className="price">{comma(option.price)}원</span>
        </div>
      ))}
    </ol>
  );
};

export default OptionList;
