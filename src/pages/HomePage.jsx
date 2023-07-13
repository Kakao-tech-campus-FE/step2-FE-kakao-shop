import { styled } from "styled-components";
import HomeTemplate from "../components/templates/HomeTemplate";

const Container = styled.div`
  height: 3000px;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeTemplate />
    </Container>
  );
};

export default HomePage;
