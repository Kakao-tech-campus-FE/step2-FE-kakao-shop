import styled from "styled-components";

const ErrorLabel = styled.div`
  color: red;
  font-size: 0.8rem;
`;

const ErrorMsg = ({ children }) => {
  // children: 에러 메시지 내용
  return (
    <>
      <ErrorLabel>{children}</ErrorLabel>
    </>
  );
};

export default ErrorMsg;
