import { comma } from "../../utils/convert";
import "../../styles/Atoms/OptionList.css";

const OptionList = ({ options, onClick }) => {
    return (
        <ol className="option-list">
            {options.map((option, index) => {
                <li key={option.id} className="option" onClick={() => onClick(option)}>
                    <span className="name">
                        {index + 1}. {option.optionName}
                    </span>
                    <span className="price">{comma(option.price)}원</span>
                </li>
            })}
        </ol> // 의미론적 태그 관점에서 순서가 있는것은 <ol>이 좋다
    )
}

export default OptionList