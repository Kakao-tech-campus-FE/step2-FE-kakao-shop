import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="flex gap-4">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
