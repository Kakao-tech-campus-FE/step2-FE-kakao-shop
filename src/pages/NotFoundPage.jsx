import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <h1>404</h1>
        <p>상품을 찾을 수 없습니다.</p>
      </Container>
    </>
  );
};

export default NotFoundPage;
