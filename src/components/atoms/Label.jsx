import { styled } from "styled-components";

const StyledLabel = styled.label`
  font-size: 16px;
  margin: 6px 0;
`;

const Label = ({ id, children }) => {
  return <StyledLabel htmlFor={id}>{children}</StyledLabel>;
};

export default Label;
