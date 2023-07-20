import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
    return (
        <Card to={`/product/${product.id}`}>
            <Photo className="card" src={`${process.env.REACT_APP_API_URL}${product.image.slice(1)}`} alt={product.productName} />
            <div className="my-3 text-sm">
                {product.productName}
            </div>
            <div className="text-lg font-bold">
                {comma(product.price)}원
            </div>
        </Card>
    );
}

export default ProductCard;