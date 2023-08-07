import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

	const staticServerUrl = "https://user-app.krampoline.com/k070a976b7d47a"

const ProductCard=({product}) => {
    return(
        <Card to={staticServerUrl + `/product/${product.id}`}>
            <Photo src={`https://user-app.krampoline.com/k070a976b7d47a${product.image}`} alt={product.productName}/>
            <div className="description">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
            {/*<h3>{product.productName}</h3>
            <p>{comma(product.price)}</p>*/}
        </Card>
    );
};

export default ProductCard;