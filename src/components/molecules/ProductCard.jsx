import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product, className }) => {
  return (
    <Card to={`/product/${product.id}`} className={className}>
      <Photo
        src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`}
        alt={product.productName}
      />
      <h3>{product.productName}</h3>
      <p>{comma(product.price)}원</p>
    </Card>
  );
};

export default ProductCard;
