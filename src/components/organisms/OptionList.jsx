import React, { useState } from "react";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import OptionButton from "../molecules/OptionButton";
import OptionItem from "../molecules/OptionItem";

export default function OptionList({ options }) {
  const [option, setOption] = useState([]);
  const [isOptionShow, setIsOptionShow] = useState(false);

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
            selected={option.length !== 0}
            isOptionShow={isOptionShow}
            onClick={handleOptionButtonClick}
          />
          {isOptionShow && (
            <ol>
              {options.map((option, index) => (
                <OptionItem key={option.id} index={index} option={option} />
              ))}
            </ol>
          )}
        </Container>
      </div>
    </article>
  );
}
