import { comma } from '../../utils/convert';
import Text from './Text';
import StyledOl from './StyledOl';
import StyledLi from './StyledLi';

const OptionList = ({ options, onClick }) => {
    return (
        <StyledOl className="option-list">
            {options.map((option, index) => (
                <StyledLi key={option.id} className="option" onClick={() => onClick(option)}>
                    <Text className="bold base">
                        {index + 1}. {option.optionName}
                    </Text>
                    <Text className="base">{comma(option.price)}원</Text>
                </StyledLi>
            ))}
        </StyledOl>
    );
};

export default OptionList;
