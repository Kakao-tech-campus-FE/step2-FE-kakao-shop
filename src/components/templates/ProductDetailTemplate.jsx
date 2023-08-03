import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

/** 상품 상세 정보 템플릿
 *
 * @param {array} product - 상품 정보
 * @returns {JSX.Element}
 */
const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="product-detail flex max-w-none mx-auto w-[1280px] mt-[80px]">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </Container>
  );
};

export default ProductDetailTemplate;
