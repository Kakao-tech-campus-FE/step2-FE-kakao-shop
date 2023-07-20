import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  top: 80px;
`;

const Wrapper = styled.div`
  width: 1200px;
  height: calc(100vh - 80px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  display: block;
  font-size: 100px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const StyledP = styled.p`
  display: block;
  font-size: 40px;
  font-weight: 500;
`;

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <StyledH1>Page Not Found</StyledH1>
        <StyledP>죄송합니다.</StyledP>
        <StyledP>요청하신 페이지를 찾을 수 없습니다.</StyledP>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
