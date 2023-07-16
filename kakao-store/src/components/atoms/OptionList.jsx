import { comma } from "../../utils/convert";

/**
 * 옵션 목록
 * @param {object} options 옵션 목록
 * @param {function} onClick 옵션 클릭 시 실행할 함수
 * @returns
 */

const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list">
      {options.map((option, index) => (
        <li key={option.id} className="option" onClick={() => onClick(option)}>
          <span className="name">
            {index + 1}. {option.optionName}
          </span>
          <span className="price">{comma(option.price)}원</span>
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
