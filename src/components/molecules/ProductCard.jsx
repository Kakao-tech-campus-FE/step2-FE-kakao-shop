import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css";
import Skeleton from "../atoms/Skeleton";

// Components of each product card

const staticServerUrl = process.env.REACT_APP_PATH || "";
const ProductCard = ({ product, isLoading }) => {
  return (
    <div className="card_deal">
      {/* while loading, use skeleton instead. */}
      {isLoading ? <Skeleton /> : null}
      <Card className="link_card" to={`/product/${product.id}`}>
        <Photo
          className="img_thumb"
          src={process.env.REACT_APP_API_URL + staticServerUrl + product.image}
          alt={product.productName}
        />
        <div className="product_name">{product.productName}</div>
        <div className="product_price">{comma(product.price)}원</div>
      </Card>
    </div>
  );
};

export default ProductCard;
