import { styled } from "styled-components";
import HomeTemplate from "../components/templates/HomeTemplate";

const Container = styled.div`
  height: 500px;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeTemplate />
    </Container>
  );
};

export default HomePage;
