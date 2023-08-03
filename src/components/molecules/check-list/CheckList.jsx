import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
`;

const Checkbox = styled.input`
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

const CheckboxLabel = styled.label`
  padding: 0.5rem 0.75rem 0.45rem;
  margin: 0 0.5rem;

  background-color: rgb(220, 220, 220);
  font-size: 0.9rem;
  color: rgb(50, 50, 50);
  border-radius: 1rem;
  cursor: pointer;
`;

function CheckList({ options, highlightColor }) {
  const [selectedList, setSelectedList] = useState([]);

  const handleCheckboxClick = (e) => {
    if (e.target.checked) {
      setSelectedList([...selectedList, e.target.id]);
    } else {
      setSelectedList(selectedList.filter((id) => id !== e.target.id));
    }
  };
  return (
    <Container>
      {options.map((option, index) => (
        <div key={index}>
          <Checkbox
            type="checkbox"
            id={index}
            onClick={handleCheckboxClick}
            highlightColor={highlightColor}
          />
          <CheckboxLabel htmlFor={index.toString()}>{option}</CheckboxLabel>
        </div>
      ))}
    </Container>
  );
}

CheckList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  highlightColor: PropTypes.string,
};

CheckList.defaultProps = {
  options: [],
  highlightColor: "#535bf2",
};

export default CheckList;
