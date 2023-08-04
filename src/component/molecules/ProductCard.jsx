import Card from "../atoms/Card"
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import '../../../src/styles/molcules/ProductCard.css';

const staticServerUrl = process.env.REACT_APP_PATH || "";

// REACT_APP_API_URL=
// process.env.REACT_APP_API_URL
// ₩${process.env.REACT_APP_API_URL}

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      
    <Card to={`${staticServerUrl}/product/${product.id}`} >
      <div className="product-photo">
        <Photo src={ process.env.REACT_APP_API_URL+ product.image} alt={product.productName} />
        </div>
        <div className="product-name">{product.productName}</div>
        <div className="product-price">{comma(product.price)}원</div>
      
    </Card>
    </div>
  );
} ;

export default ProductCard;