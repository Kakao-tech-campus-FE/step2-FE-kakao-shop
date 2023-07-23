import { styled } from "styled-components";

const Container = styled.div`
  height: ${(props) => (props.$title ? "60px" : "40px")};
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: ${(props) => (props.$title ? "1px solid #eee" : "none")};
`;

const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  gap: 2px;
  align-items: center;
  width: max-content;
  height: 25px;
  font-size: ${(props) => (props.$title ? "20px" : "14px")};
  font-weight: ${(props) => (props.$title ? "500" : "inherit")};
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
`;

const CheckBox = ({ id, text, checked, onCheck, title }) => {
  return (
    <Container $title={title}>
      <StyledLabel htmlFor={id} $title={title}>
        <StyledInput
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(id)}
        />
        {text}
      </StyledLabel>
    </Container>
  );
};

export default CheckBox;
