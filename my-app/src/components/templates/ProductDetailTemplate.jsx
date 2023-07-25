import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="grid grid-rows-2 grid-flow-col gap-4 auto-cols-max">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
