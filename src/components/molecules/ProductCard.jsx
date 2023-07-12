import { comma } from "../../utils/convert";
import Card from "../atoms/Card";

const ProductCard = ({ product }) => {
    return (
        <Card to={`/product/${product.id}`}>
            <img src={product.image} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{comma(product.price)}원</p>
        </Card>
    )
}