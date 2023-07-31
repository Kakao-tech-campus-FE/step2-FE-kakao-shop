import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* 뷰포트의 가로 너비 전체를 차지 */
  min-height: 100vh; /* 뷰포트의 세로 높이 전체를 차지 */
  overflow-x: hidden;
`;

const Container = ({ children }) => {
  return (
    //styled componets로 생성된 StyledContainer태그로 Container컴포넌트를 만들고, 상위에서 이를 사용한다
    <StyledContainer className="container">{children}</StyledContainer>
  );
};

export default Container;
