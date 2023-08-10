import Card from "../atoms/Card"
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import '../../../src/styles/molcules/ProductCard.css';
// import '../../../public/assets/images';

const staticServerUrl = process.env.REACT_APP_PATH || "";

// ${process.env.PUBLIC_URL}
// REACT_APP_API_URL=
// process.env.REACT_APP_API_URL
// ₩${process.env.REACT_APP_API_URL}

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      
    <Card to={staticServerUrl + `/product/${product.id}`} >
      <div className="product-photo">
        <Photo src={ staticServerUrl + product.image } alt={product.productName} />
        </div>
        <div className="product-name">{product.productName}</div>
        <div className="product-price">{comma(product.price)}원</div>
      
    </Card>
    </div>
  );
} ;

export default ProductCard;