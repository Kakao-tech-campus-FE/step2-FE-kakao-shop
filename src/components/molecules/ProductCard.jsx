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
      <div className="flex items-center justify-between mt-2">
        <div className="text-2xl font-bold text-blue-500">톡딜가</div>
        <div className="product-price text-2xl font-bold mr-20">
          {comma(product.price)}원
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
