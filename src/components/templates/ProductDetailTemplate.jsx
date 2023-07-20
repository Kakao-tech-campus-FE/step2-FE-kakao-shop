import Container from "../atoms/Container";
import OptionColumn from "../molecules/OptionColumn";
import ProductInformationColumn from "../molecules/ProductInformationColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="flex justify-center w-full min-w-[1280px] m-auto">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};
export default ProductDetailTemplate;
