import Container from "../Atoms/Container";
import ProductInformationColumn from "../Molecules/ProductInformationColumn";
import OptionColumn from "../Molecules/OptionColumn";
import "../../Styles/ProductDetailTemplate.css";

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="container">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
