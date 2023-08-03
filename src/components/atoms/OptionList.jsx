/*eslint-disable react/prop-types */
import { comma } from "../../utils/convert";
import { useMemo } from "react";
import "../../styles/atoms/OptionList.css";
// Get options, rendering and click then callback
const OptionList = ({ options, onClick }) => {
  const memoizedOnClick = useMemo(() => onClick, [onClick]);
  return (
    <ol className="option-list block text-sm">
      {options.map((option, index) => (
        <li
          key={option.id}
          className="option list-item py-2.5 border-b border-gray-500/4"
          onClick={() => memoizedOnClick(option)}
        >
          <span className="name block leading-5 align-top">
            {index + 1}. {option.optionName}
          </span>
          <span className="price block">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
