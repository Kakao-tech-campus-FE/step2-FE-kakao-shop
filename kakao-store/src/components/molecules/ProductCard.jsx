import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

/**
 * 상품 카드
 *
 * @param {object} product - 상품 정보
 * @param {string} product.productName - 상품 이름
 * @param {number} product.price - 상품 가격
 * @param {string} product.image - 상품 이미지
 * @param {number} product.id - 상품 아이디
 * @returns {JSX.Element} 상품 카드
 */

const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Photo src={product.image} alt={product.productName} />
      <h3 className="product-name">{product.productName}</h3>
      <p className="product-price">{comma(product.price)}원</p>
    </Card>
  );
};

export default ProductCard;
