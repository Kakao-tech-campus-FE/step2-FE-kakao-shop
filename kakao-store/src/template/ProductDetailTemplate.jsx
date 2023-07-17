import Container from "../components/atoms/Container";
import ProductInformationColumn from "../components/molecules/ProductInformationColumn";
import ProductDetailPage from "../pages/ProductDetailPage";
import OptionColums from "../components/molecules/OptionColums";

const ProductDetailTemplate = () => {
  return (
    <Container>
      <ProductInformationColumn />
      <ProductDetailPage />
    </Container>
  );
};

export default ProductDetailTemplate;
