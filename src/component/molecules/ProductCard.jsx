import { comma } from "../../utils/convert"
import Card from "../atoms/Card"
import Photo from "../atoms/Photo";
import "../../styles/molecules/ProductCard.css"

const ProductCard =({ product }) => {
    const { id, productName, price, image } = product;


    return ( 
        <Card to={`/product/${id}`}>
            <Photo src={image} alt={productName} />
            <div className="product-name">{productName}</div>
            <div className="product-price">{comma(price)}원</div>
        </Card>
    )
}

export default ProductCard;