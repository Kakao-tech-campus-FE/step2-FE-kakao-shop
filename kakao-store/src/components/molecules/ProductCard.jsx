import { comma } from '../../utils/convert';
import Card from '../atoms/Card';
import Photo from '../atoms/Photo';

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
      <Photo src={product.image} alt={product.productName} className="h-40 w-60 rounded-md" />
      <h3 className="product-name block w-60 p-0 text-sm">{product.productName}</h3>
      <span className="block overflow-hidden font-bold">
        <span className="sale-price blue mx-1 text-lg text-kakao_blue">톡딜가</span>
        <span className="product-price m-0 text-xl ">{comma(product.price)}원</span>
      </span>
    </Card>
  );
};

export default ProductCard;
//284 160
