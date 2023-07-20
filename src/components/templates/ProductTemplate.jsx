import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";
import ProductDetails from "../organisms/ProductDetails";

const Container = styled.div`
  position: relative;
  top: 60px;
  width: 1200px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductTemplate = () => {
  return (
    <>
      <GlobalNavBar height="60px" />
      <Container>
        <ProductDetails />
      </Container>
    </>
  );
};

export default ProductTemplate;
