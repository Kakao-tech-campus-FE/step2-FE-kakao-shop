import React from "react";
import Container from "../atoms/Container";
import OptionButton from "../molecules/OptionButton";
import OptionItem from "../molecules/OptionItem";
import SelectedOptionItem from "../molecules/SelectedOptionItem";

export default function OptionList({
  isOptionShow,
  setIsOptionShow,
  options,
  optionList,
  handleOptionClick,
  handleOptionUpdate,
  handleOptionDelete,
}) {
  const handleOptionButtonClick = () => {
    setIsOptionShow((prev) => !prev);
  };
  return (
    <article className="pt-8">
      <p className="pb-2 font-bold">옵션 선택</p>
      <div className="max-h-64 overflow-auto">
        <Container
          className={`flex flex-col ${
            isOptionShow ? "border border-gray-600" : ""
          } rounded-sm`}
        >
          <OptionButton
            selected={optionList.length !== 0}
            isOptionShow={isOptionShow}
            onClick={handleOptionButtonClick}
          />
          {isOptionShow && (
            <ol>
              {options.map((option, index) => (
                <OptionItem
                  key={option.id}
                  index={index}
                  option={option}
                  onClick={handleOptionClick}
                />
              ))}
            </ol>
          )}
        </Container>
        <ul>
          {optionList.map((option) => (
            <SelectedOptionItem
              key={`selected-option-key-${option.id}`}
              option={option}
              onUpdate={handleOptionUpdate}
              onDelete={handleOptionDelete}
            />
          ))}
        </ul>
      </div>
    </article>
  );
}
