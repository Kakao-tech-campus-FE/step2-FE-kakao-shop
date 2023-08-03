import { comma } from "../../utils/convert"
import Card from "../atoms/Card"
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css"

const ProductCard =({ product }) => {
    const staticServerUri = process.env.REACT_APP_PATH || "";

    return ( 
        <Card to={`/product/${product.id}`}>
            <Photo className = "card" src={staticServerUri + process.env.REACT_APP_API_URL + product.image} alt={product.productName}/>
            <div className="product-name">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
        </Card>
    )
}

export default ProductCard;