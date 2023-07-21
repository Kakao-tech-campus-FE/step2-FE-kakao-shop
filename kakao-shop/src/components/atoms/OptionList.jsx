import { comma } from '../../utils/convert';
import Divider from './Divider';

/**
 * 옵션 목록
 * @param {object} options 옵션 목록 - [{id, optionName, price}]
 * @param {function} onClick 옵션 클릭 시 실행할 함수
 */
const OptionList = ({ options, onClick }) => {
  return (
    <ol className="option-list border border-solid border-gray-400 rounded-sm px-3 py-1">
      {options.map((option, index) => (
        <li key={option.id} className="option border pb-1 my-1" onClick={() => onClick(option)}>
          <span className="name text-gray-800 text-sm xl:text-base tracking-tighter">
            {index + 1}. {option.optionName}
          </span>
          <br />
          <span className="price text-sm">{comma(option.price)}원</span>
          {options.length - 1 !== index && (
            <div className="divider-container mx-0 mt-1">
              <Divider />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default OptionList;
