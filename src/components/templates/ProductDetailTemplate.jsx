import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="product-detail flex max-w-none mx-auto w-[1280px] mt-[80px]">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
