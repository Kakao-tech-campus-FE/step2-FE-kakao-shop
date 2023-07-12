import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import { GoGift, GoHeart } from "react-icons/go";

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
        className={"border-radius-10"}
      />
      <div className="product-name mt-4 line-clamp-2">
        {product.productName}
      </div>
      <div className="product-price mt-2 font-bold text-xl">
        {comma(product.price)}원
      </div>
      <div className="flex mt-3">
        <GoGift size="25" color="gray" />
        <GoHeart size="25" color="gray" className="ml-2" />
      </div>
    </Card>
  );
};

export default ProductCard;
