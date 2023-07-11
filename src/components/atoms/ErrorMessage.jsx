import { styled } from "styled-components";

const StyledP = styled.p`
  color: red;
  font-size: 14px;
`;

const ErrorMessage = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default ErrorMessage;
