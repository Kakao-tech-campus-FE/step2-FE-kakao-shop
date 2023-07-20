import React, { useState } from "react";
import SelectOption from "../../atoms/ProductDetailPage/SelectOption";

const SelectOptionList = ({ options, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select-option-list">
      <div
        className="option-type"
        onClick={toggleDropdown}
        style={{ cursor: "pointer" }}
      >
        <span>옵션</span>
        <span>{isOpen ? "∧" : "∨"}</span>
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <SelectOption
              key={option.id}
              option={option}
              onSelectOption={onSelectOption}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectOptionList;
