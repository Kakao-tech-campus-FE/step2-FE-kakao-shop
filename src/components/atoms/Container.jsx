import styled from "styled-components";

const StyledContainer =
  // 아래의 style이 입혀진 div 요소를 생성
  styled.div`
    display: inline-block;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    font-size: 12px;
    vertical-align: middle;
  `;

const Container = ({ children }) => {
  return (
    //styled componets로 생성된 StyledContainer태그로 Container컴포넌트를 만들고, 상위에서 이를 사용한다
    <StyledContainer className="container">{children}</StyledContainer>
  );
};

export default Container;
