import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
// layout of product detail page.

// product props contains product's detail info
const ProductDetailTemplate = ({ product }) => {
  return (
    <Container>
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
