import Card from "../atoms/Card"
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import '../../../src/styles/molcules/ProductCard.css';


const ProductCard = ({ product }) => {
  return (
    
    <Card to={`/product/${product.id}`}>
      <div className="product-photo">
        <Photo src={process.env.REACT_APP_API_URL + product.image} alt={product.productName} />
        </div>
        <div className="product-name">{product.productName}</div>
        <div className="product-price">{comma(product.price)}원</div>
      
    </Card>
  );
} ;

export default ProductCard;