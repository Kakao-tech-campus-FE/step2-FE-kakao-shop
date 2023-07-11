import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Photo src={product.image} alt={product.productName} />
      <h3 className="product-name">{product.productName}</h3>
      <p className="product-price">{comma(product.price)}원</p>
    </Card>
  );
};

export default ProductCard;
