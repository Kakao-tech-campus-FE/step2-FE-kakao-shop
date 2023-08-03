import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card className="card group" to={`/product/${product.id}`}>
      <div className="rounded-2xl overflow-hidden">
        <Photo
          className=" photo group-hover:scale-110 rounded-2xl transition-transform duration-300 ease-in-out"
          src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`}
          alt={product.productName}
        />
      </div>
      <div className="product-name group-hover:opacity-100">
        {product.productName}
      </div>
      <span className=" text-gray-400 bg-gray-100 rounded-m text-s p-1 mt-4">
        무료배송
      </span>
      <div className="mt-2 ">
        <span className="text-xl font-bold text-blue-500">톡딜가</span>
        <span className="product-price text-xl font-bold ml-2 ">
          {comma(product.price)}원
        </span>
      </div>
    </Card>
  );
};

export default ProductCard;
