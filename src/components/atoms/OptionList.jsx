import { comma } from "../../utils/convert";
import styled from "styled-components";

const StyledList = styled.li`
  padding: 0.5rem 1rem;
  .name {
    font-weight: bold;
  }

  .price {
    display: block;
  }
`;

const StyledOrderedList = styled.ol`
  padding: 0;
  > li {
    border: 1px solid #979797;
  }

  > li:first-child {
    border-radius: 8px 8px 0 0;
  }

  > li:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const OptionList = ({ options, onClick }) => {
  return (
    <StyledOrderedList className="option-list">
      {options.map((option, index) => (
        <StyledList
          key={option.id}
          className="option"
          onClick={() => onClick(option)}
        >
          <span className="name">
            {index + 1}. {option.optionName}
          </span>
          <span className="price">{comma(option.price)}원</span>
        </StyledList>
      ))}
    </StyledOrderedList>
  );
};

export default OptionList;
