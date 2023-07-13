import styled from "styled-components";

const Label = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  display: block;
  color: #4a5568;
`;
