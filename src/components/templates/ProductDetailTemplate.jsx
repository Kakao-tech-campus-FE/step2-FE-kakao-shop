import ProductInformationColumn from "../moleclules/ProductInformationColumn";
import OptionColumn from "../organisms/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </div>
  );
};

export default ProductDetailTemplate;
