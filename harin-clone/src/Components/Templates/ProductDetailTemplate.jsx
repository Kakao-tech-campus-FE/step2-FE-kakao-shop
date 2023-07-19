import Container from "../Atoms/Container";
import ProductInformationColumn from "../Molecules/ProductInformationColumn";
import OptionColumn from "../Molecules/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container>
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
