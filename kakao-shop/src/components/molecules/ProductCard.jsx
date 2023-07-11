import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

/**
 * 상품 정보가 담길 카드 컴포넌트
 *
 * @param {object} product - 상품 정보 객체{ id, productName, price, image}
 */
const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Photo
        src={`${process.env.REACT_APP_API_URL}${product.image}`}
        alt={product.productName}
      />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
