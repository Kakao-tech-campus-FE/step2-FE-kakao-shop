// import { comma } from "../../utils/convert";
const OptionList = ({ options, onClick,children }) => {
    return (
        <ol>
            {options.map((option, index) => (
                <li className='my-3' key={option.id} onClick={()=>{onClick(option)}}>
                    <span>
                       {index+1}. 
                    </span>
                    <span className="mx-5">
                       {option.optionName}
                    </span>
                    <span>{option.price}원</span>
                </li>
            ))}
        </ol> 
    );
};

export default OptionList;