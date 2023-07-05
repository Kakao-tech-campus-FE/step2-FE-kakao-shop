import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

const RadioBox = styled.div``;

const RadioInput = styled.input`
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: none;

  &:checked + label {
    background-color: ${({ highlightColor }) => highlightColor};
    color: white;
  }
`;

const RadioLabel = styled.label`
  padding: 0.5rem 0.75rem 0.45rem;
  margin: 0 0.5rem;

  background-color: rgb(220, 220, 220);
  font-size: 0.9rem;
  color: rgb(50, 50, 50);
  border-radius: 1rem;
  cursor: pointer;
`;

function RadioButton({ options, highlightColor }) {
  const [selectedRadioId, setSelectedRadioId] = useState(0);

  const handleRadioChange = (e) => {
    console.log(e.target.id);
    setSelectedRadioId(Number(e.target.id));
  };

  return (
    <Container>
      {options.map((option, index) => (
        <RadioBox key={index}>
          <RadioInput
            type="radio"
            id={index}
            onClick={handleRadioChange}
            checked={selectedRadioId === index}
            highlightColor={highlightColor}
          />
          <RadioLabel htmlFor={index}>{option}</RadioLabel>
        </RadioBox>
      ))}
    </Container>
  );
}

RadioButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  highlightColor: PropTypes.string,
};

RadioButton.defaultProps = {
  options: ["프론트엔드", "백엔드", "기획", "디자이너"],
  highlightColor: "#535bf2",
};

export default RadioButton;
