/* eslint-disable */

import comma from "../../utils/convert";

/** 옵션 리스트
 *
 * @param {array} options - options
 * @param {function} onClick - 옵션 클릭 시 실행되는 함수
 * @returns {JSX.Element}
 * @constructor
 */

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list max-w-md divide-y divide-gray-200 border border-gray-800 rounded-[4px]">
      {options.map((option, index) => (
        <li
          key={option.id}
          className="option pt-[9px] pb-[10px] px-[14px] text-[14px]"
          onClick={() => onClick(option)}
        >
          <span className="name flex items-center">{option.optionName}</span>
          <span className="price">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
