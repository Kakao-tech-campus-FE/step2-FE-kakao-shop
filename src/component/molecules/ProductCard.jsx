import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 from "/workspace/step2-FE-kakao-shop/src/img/1.jpg"

	const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard=({product}) => {
    return(
        <Card to={staticServerUrl + `/product/${product.id}`}>
            <Photo src={product.id} alt={product.productName}/>
            <div className="description">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
            {/*<h3>{product.productName}</h3>
            <p>{comma(product.price)}</p>*/}
        </Card>
    );
};

export default ProductCard;