import Photo from "../atoms/Photo";
import { comma } from "../../utils/convert";

const ProductInformationColumn = ({ product }) => {
  return (
    <div className="product-information-column flex w-2/3 flex-row">
      <div className={"product-image w-1/2"}>
        <Photo className={"w-full p-2"} src={product.image} />
      </div>
      <div className="product-description flex w-1/2 flex-col justify-between p-2">
        <div className="detail-product-name text-start text-2xl">
          {product.productName}
        </div>
        <div className="product-description">{product.description}</div>
        <div className="product-information-price text-start">
          {`${comma(product.price)}원`}
        </div>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
