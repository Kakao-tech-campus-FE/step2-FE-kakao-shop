import { styled } from "styled-components";

const StyledP = styled.p`
  color: green;
  font-size: 14px;
`;

// 유효성 검사 후, 유효메시지 텍스트 컴포넌트
const ValidMessage = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default ValidMessage;
