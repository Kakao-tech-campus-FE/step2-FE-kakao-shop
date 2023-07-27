import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import Divider from "../atoms/Divider";

const ProductDetailTemplate = ({ product }) => {
  return (
    <div className="flex xl:justify-between sm:justify-start mx-auto">
      <ProductInformationColumn product={product} />
      <div className="flex ml-10 sm:ml-0">
        <Divider type="vertical" />
        <OptionColumn product={product} />
      </div>
    </div>
  );
};

export default ProductDetailTemplate;
