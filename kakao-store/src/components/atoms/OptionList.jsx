import { useState } from 'react';
import { comma } from '../../utils/convert';

/**
 * 옵션 목록
 * @param {object} options 옵션 목록
 * @param {function} onClick 옵션 클릭 시 실행할 함수
 * @returns
 */

const OptionList = ({ options, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button
        className="flex w-full items-center justify-between rounded  border border-gray-300 bg-white px-4 py-2"
        onClick={toggleDropdown}
      >
        상품 선택
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 transform' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12.586L4.707 7.293A1 1 0 116.121 5.88L10 9.758l3.879-3.878a1 1 0 011.414 1.415L10 12.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full  border border-gray-300 bg-white shadow-md">
          {options.map((option, index) => (
            <li
              key={option.id}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                onClick(option);
                setIsOpen(false);
              }}
            >
              <span className="name">
                {index + 1}. {option.optionName}
              </span>

              <span className="price">{comma(option.price)}원</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OptionList;
