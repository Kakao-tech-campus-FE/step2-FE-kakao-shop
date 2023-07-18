import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import "../../styles/templates/ProductDetailTemplate.css"

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="productDetailTemplate">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
