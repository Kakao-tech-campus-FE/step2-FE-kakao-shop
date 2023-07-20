import { useState } from "react";
import { comma } from "../../utils/convert";
import Button from "./Button";

const OptionList = ({ options, onClick }) => {
  const [isOptionOpened, setIsOptionOpened] = useState(false);
  return (
    <div className="border border-neutral-300 rounded-[3px]">
      <Button
        className={"w-full pl-[14px] py-3 bg-neutral-100 text-start text-sm"}
        onClick={() => {
          setIsOptionOpened((prev) => !prev);
        }}
      >
        옵션
      </Button>
      <ol className="option-list">
        {options.map((option, index) => {
          return (
            <li
              className="border-t-[1px] border-neutral-200 pl-[14px] py-[10px]"
              key={option.id}
              onClick={() => onClick(option)}
            >
              <p className="text-sm">{option.optionName}</p>
              <p className="text-sm">{comma(option.price)}원</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default OptionList;
