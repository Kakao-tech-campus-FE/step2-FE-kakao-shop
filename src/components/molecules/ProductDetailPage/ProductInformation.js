import { comma } from "../../../utils/convert";
import AreaStar from "./AreaStar";

const ProductInformation = ({ productDetail }) => {
  return (
    <div className="product-information">
      <AreaStar count={productDetail.starCount} />
      <strong className="product-name">{productDetail.productName}</strong>
      <div className="product-description">{productDetail.description}</div>
      <div className="product-price">톡딜가 {comma(productDetail.price)}원~</div>
    </div>
  );
};

export default ProductInformation;
