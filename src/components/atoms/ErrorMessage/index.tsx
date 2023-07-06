import { styled } from "styled-components";

interface Props {
  // 에러 메시지
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <Error>{children}</Error>;
};

export default ErrorMessage;

const Error = styled.p`
  margin-top: -10px;
  padding-bottom: 4px;
  color: #e65f3e;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.05em;
`;
