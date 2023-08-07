import styled from "styled-components";

const StyledLabel = styled.label`
  margin-right: 1rem;
  font-size: 0.9rem;
`;

const Label = ({ htmlFor, children }) => {
  // htmlFor: input의 id 값
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
