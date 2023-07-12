import Card from "../atoms/Card"
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo src={`../img/images${product.id}.jpg`} alt="" />
      <div className="product-name">{product.productName}</div>
      <div className="product-price">{comma(product.price)}원</div>
      
    </Card>
  );
} ;

export default ProductCard;