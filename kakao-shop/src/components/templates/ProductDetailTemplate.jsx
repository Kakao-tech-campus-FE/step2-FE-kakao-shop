import Container from '../atoms/Container';
import ProductInformationColumn from '../molecules/ProductInformationColumn';
import OptionColumn from '../molecules/OptionColumn';
import Divider from '../atoms/Divider';

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="flex justify-between min-w-[740px]">
      <ProductInformationColumn product={product} />
      <div className="flex ml-10">
        <Divider type="vertical" />
        <OptionColumn product={product} />
      </div>
    </Container>
  );
};

export default ProductDetailTemplate;
