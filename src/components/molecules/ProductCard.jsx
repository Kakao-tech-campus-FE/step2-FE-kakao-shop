import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo className={"card"} alt={product.productName} src={product.image} />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">{comma(product.price)}원</div>
    </Card>
  );
};
export default ProductCard;
