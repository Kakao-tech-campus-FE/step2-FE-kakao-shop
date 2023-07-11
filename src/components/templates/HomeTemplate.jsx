import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductGrid from "../organisms/ProductGrid";
import Carousel from "../organisms/Carousel";

const Container = styled.div`
  border: 1px solid black;
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 80px;
`;

const HomeTemplate = () => {
  return (
    <>
      <GlobalNavBar />
      <Carousel />
      <Container>
        <ProductGrid />
      </Container>
    </>
  );
};

export default HomeTemplate;
