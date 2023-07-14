import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductGrid from "../organisms/ProductGrid";
import Carousel from "../organisms/Carousel";
import Footer from "../molecules/Footer";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 80px;
  height: auto;
  min-height: calc(100vh - 481px);
`;

const HomeTemplate = () => {
  return (
    <>
      <GlobalNavBar height="80px" />
      <Carousel />
      <Container>
        <ProductGrid />
      </Container>
      <Footer />
    </>
  );
};

export default HomeTemplate;
