import { styled } from "styled-components";

const Container = styled.footer`
  position: relative;
  top: 80px;
  background-color: rgb(250, 250, 250);
  border-top: 1px solid rgb(238, 238, 238);
`;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>카카오 테크 캠퍼스 화이팅!! 쿠키즈 화이팅!!</Wrapper>
    </Container>
  );
};

export default Footer;
