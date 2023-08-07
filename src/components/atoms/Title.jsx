import styled from "styled-components";

const StyledTitle =
  // 아래의 style이 입혀진 div 요소를 생성
  styled.h1`
    height: 27px;
    font-size: 45px;
    line-height: 70px;
    text-align: center;
  `;

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
