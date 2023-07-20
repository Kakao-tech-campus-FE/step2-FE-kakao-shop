import { comma } from "../../utils/convert";
import "../../styles/atoms/OptionList.css"

const OptionList = ({ options, onclick }) => {

    

    return (
        <ol className="option-list">
            {options && options.map((option, index) => (
                <li key={option.id} className="option" onClick={() => onclick(option)}>
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