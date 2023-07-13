import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Skeleton from "react-loading-skeleton";

const ProductCard = ({ product, isLoading }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Photo src={product.image} alt={product.productName} />
      <h3 className="product-name">{product.productName || <Skeleton />}</h3>
      <p className="product-price">{comma(product.price) || <Skeleton />}원</p>
    </Card>
  );
};

export default ProductCard;
