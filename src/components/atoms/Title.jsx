import styled from "styled-components";

const StyledTitle =
  // 아래의 style이 입혀진 div 요소를 생성
  styled.h1`
    height: 27px;
    margin: 0 auto;
    font-size: 45px;
    line-height: 70px;
    text-align: center;
  `;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
