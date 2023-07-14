import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css";
import Skeleton from "../atoms/Skeleton";

const ProductCard = ({ product, isLoading }) => {
  return (
    <div className="card_deal">
      {isLoading ? <Skeleton /> : null}
      <Card className="link_card" to={`/product/${product.id}`}>
        <Photo
          className="img_thumb"
          src={import.meta.env.VITE_API_URL + product.image}
          alt={product.productName}
        />
        <div className="product_name">{product.productName}</div>
        <div className="product_price">{comma(product.price)}원</div>
      </Card>
    </div>
  );
};

//CSS 속성
// wdith : 내가 src로 가져오는 이미지 원본의 width 그대로 가져온다.
// production level

export default ProductCard;
