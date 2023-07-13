import { styled } from "styled-components";

const StyledLabel = styled.label`
  font-size: 16px;
  margin: 6px 0;
`;

// id: input을 위한 id
const Label = ({ id, children }) => {
  return <StyledLabel htmlFor={id}>{children}</StyledLabel>;
};

export default Label;
