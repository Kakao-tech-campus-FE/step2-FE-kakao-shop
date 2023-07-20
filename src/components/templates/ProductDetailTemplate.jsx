import Container from "../atoms/Container";
import OptionColumn from "../molecules/OptionColumn";
import ProductInformationColumn from "../molecules/ProductInformationColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="flex w-full px-24 py-6 m-auto">
      <ProductInformationColumn product={product} />
      <OptionColumn className="" product={product} />
    </Container>
  );
};
export default ProductDetailTemplate;
