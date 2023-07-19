import { comma } from "../../utils/convert";
const OptionList = ({ options, onClick,children }) => {
    return (
        <ol>
            {options.map((option, index) => (
                <li key={option.id} onClick={()=>{onClick(option)}}>
                    <span>
                       {index+1}. 
                    </span>
                    <span>
                       {option.optionName}
                    </span>
                    <span>{comma(option.price)}원</span>
                </li>
            ))}
        </ol> 
    );
};

export default OptionList;