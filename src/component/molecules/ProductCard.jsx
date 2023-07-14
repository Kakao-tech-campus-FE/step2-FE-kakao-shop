import { comma } from "../../utils/convert";
import Card from "../atoms/Card";

const ProductCard=({product}) => {
    return(
        <Card to={`/product/${product.id}`}>
            <Photo src={product.imageUrl} alt={product.productname}/>
            <div className="product-name">{product.productname}</div>
            <div className="product-price">{comma(product.price)}원</div>
            {/*<h3>{product.productName}</h3>
            <p>{comma(product.price)}</p>*/}
        </Card>
    );
};

export default ProductCard;