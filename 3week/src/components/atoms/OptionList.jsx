import { comma } from "../../utils/convert";
import "../../styles/atoms/OptionList.css";

const OptionList = ({ options, onClick }) => {
  // options 옵션들이 담긴 배열
  // onClick 각 옵션 클릭 시 호출되는 함수
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
