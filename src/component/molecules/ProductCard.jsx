import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard=({product}) => {
    return(
        <Card to={`/product/${product.id}`}>
            <Photo src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`} alt={product.productName}/>
            <div className="description">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
            {/*<h3>{product.productName}</h3>
            <p>{comma(product.price)}</p>*/}
        </Card>
    );
};

export default ProductCard;