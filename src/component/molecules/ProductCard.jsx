import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard=({product}) => {
    return(
        < Card to={`${staticServerUrl}/product/${product.id}`}>
           <img src={`${staticServerUrl}${product.image}`} alt={product.name} width='200px'></img>
            <div className="description">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
            {/*<h3>{product.productName}</h3>
            <p>{comma(product.price)}</p>*/}
        </Card>
    );
};

export default ProductCard;