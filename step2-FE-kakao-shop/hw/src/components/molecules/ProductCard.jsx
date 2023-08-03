import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo
        className="card"
        src={
          "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com" +
          product.image
        }
        alt={product.productName}
      />
      <div className="flex flex-col gap-2 mb-4">
        <div className="product-name pt-3">{product.productName}</div>
        <div className="product-price">{comma(product.price)}원</div>
      </div>
    </Card>
  );
};

export default ProductCard;
