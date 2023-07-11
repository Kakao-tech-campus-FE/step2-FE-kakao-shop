import { styled } from "styled-components";

const StyledP = styled.p`
  color: green;
  font-size: 14px;
`;

const ValidMessage = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default ValidMessage;
