import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo src={product.image} alt={product.productName} />
      <span className="free-badge">무료배송</span>
      <div className="product-name">
        <span>{product.productName}</span>
      </div>

      <div className="product-price">
        <span className="talkdeal" style={{ color: "#4684e9" }}>
          톡딜가{" "}
        </span>
        <span>{comma(product.price)}원</span>
      </div>
    </Card>
  );
};
export default ProductCard;
