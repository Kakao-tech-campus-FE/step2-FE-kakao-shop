import { styled } from "styled-components";

const StyledH1 = styled.h1`
  margin-bottom: 16px;
  text-align: center;
  font-size: 40px;
`;

// 제목을 나타내는 컴포넌트
const Title = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default Title;
