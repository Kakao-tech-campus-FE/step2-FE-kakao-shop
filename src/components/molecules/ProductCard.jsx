import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card className="card" to={`/product/${product.id}`}>
      <Photo
        className="photo"
        src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`}
        alt={product.productName}
      />
      <div className="product-name"> {product.productName}</div>
      <div className="product-price">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
