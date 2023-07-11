import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

/**
 * 상품 정보가 담길 카드 컴포넌트
 */
const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Photo src={product.image} alt={product.productName} />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
