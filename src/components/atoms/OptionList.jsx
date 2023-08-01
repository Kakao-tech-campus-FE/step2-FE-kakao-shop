import { comma } from "../../utils/comma";
import { styled } from "styled-components";

const OptionList = ({options, onClick}) => {
    return (
        <OptionBox className="option-list">
            {options.map((option, index) => (
                <li key={option.id} className="option" onClick={() => onClick(option)}>
                    <span className="name">
                        {index + 1}. {option.optionName}
                    </span>
                    <span className="price">{comma(option.price)}원</span>
                </li>
            ))}
        </OptionBox>
    );
};

export default OptionList;

const OptionBox = styled.ol`
    border : 2px solid #c5c5c5;
    & > li {
        border : 1px solid #c5c5c5;
        padding : 10px 0 10px 5px;
        cursor: pointer;
        transition: all 0.5s;
    }
    & > li:hover {
        background-color: #c5c5c5;
    }
`