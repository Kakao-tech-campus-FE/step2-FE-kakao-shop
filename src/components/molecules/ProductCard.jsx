import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
// import "../../styles/molecules/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo
        className="card"
        src={product.image}
        alt={product.productName}
      />
      <div className="product-name py-2 font-medium">{product.productName}</div>
      <div className="product-price font-bold">{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
