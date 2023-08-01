import { styled } from "styled-components";

const Container = styled.div`
  height: calc(100vh - 154px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  display: block;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const StyledP = styled.p`
  display: block;
  font-size: 40px;
  font-weight: 500;
`;

const EmptyCart = ({ text }) => {
  return (
    <Container>
      <StyledH1>텅...</StyledH1>
      <StyledP>{text}</StyledP>
    </Container>
  );
};

export default EmptyCart;
