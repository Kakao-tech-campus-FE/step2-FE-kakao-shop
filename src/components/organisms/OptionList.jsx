import React, { useState } from "react";
import Container from "../atoms/Container";
import OptionButton from "../molecules/OptionButton";
import OptionItem from "../molecules/OptionItem";
import SelectedOptionItem from "../molecules/SelectedOptionItem";

export default function OptionList({ options }) {
  const [optionList, setOptionList] = useState([]);
  const [isOptionShow, setIsOptionShow] = useState(false);

  const handleOptionButtonClick = () => {
    setIsOptionShow((prev) => !prev);
  };
  const handleOptionClick = (option) => {
    const { id, optionName, price } = option;
    setOptionList((prev) => {
      const hasOption = Boolean(prev.find((opt) => opt.id === id));

      if (hasOption) {
        return prev.map((opt) =>
          opt.id === id ? { ...opt, count: opt.count + 1 } : opt
        );
      }
      return [...prev, { id, optionName, price, count: 1 }];
    });
  };
  console.log(options);
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
            <SelectedOptionItem key={option.id} option={option} />
          ))}
        </ul>
      </div>
    </article>
  );
}
