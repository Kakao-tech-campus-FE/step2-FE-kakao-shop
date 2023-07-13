import { styled } from "styled-components";

const StyledP = styled.p`
  color: red;
  font-size: 14px;
`;

// 유효성 검사 후, 에러메시지 텍스트 컴포넌트
const ErrorMessage = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default ErrorMessage;
