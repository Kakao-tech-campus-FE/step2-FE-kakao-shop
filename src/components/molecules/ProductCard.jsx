import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      {/* <Photo src={product.image} alt={product.productName} />   */}
      <Photo
        src={`${staticServerUri}${product.image}`}
        alt={product.productName}
      />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">{comma(product.price)}원</div>
    </Card>
  );
};
export default ProductCard;
