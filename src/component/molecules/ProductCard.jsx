import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Image from "../atoms/Image";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductCard=({product}) => {
    return(
        <Card to={staticServerUrl + `/product/${product.id}`}>
            <Image
        className="w-full rounded border"
        src={staticServerUrl + product.image}
        alt={product.productName}
      />
            <div className="description">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
            {/*<h3>{product.productName}</h3>
            <p>{comma(product.price)}</p>*/}
        </Card>
    );
};

export default ProductCard;