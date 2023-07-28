import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import { GoShare, GoHeart } from "react-icons/go";

/**
 * 상품 정보가 담길 카드 컴포넌트
 *
 * @param {object} product - 상품 정보 객체{ id, productName, price, image}
 */
const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <div className="overflow-hidden rounded-md">
        <Photo
          src={`${process.env.REACT_APP_API_URL}${product.image}`}
          alt={product.productName}
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="mt-2">
        <span className="bg-gray-100 p-1.5 text-[0.7rem] text-gray-500">
          무료배송
        </span>
      </div>
      <div className="product-name mt-2 line-clamp-2">
        {product.productName}
      </div>
      <div className="product-price mt-2 text-xl">
        <span className="text-kakao-blue font-bold">톡딜가 </span>
        <span className="font-extrabold">{comma(product.price)}원</span>
      </div>
      <div className="flex justify-end gap-1.5 m-3 text-gray-500">
        <GoShare size="22" />
        <GoHeart size="22" className="ml-2" />
      </div>
    </Card>
  );
};

export default ProductCard;
