import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import { comma } from "../../utils/convert";

const ProductCard = ({ product }) => {
    return (
        <Card className={`d-flex p-1`} to={`/product/${product.id}`}>
            <Photo
                src={process.env.REACT_APP_API_URL + product.image}
                alt={product.productName}
            />
            <div
                className="product-name text-start flex-grow-1"
                style={{ fontSize: "12px" }}
            >
                {product.productName}
            </div>
            <div className="product-price text-start">
                {comma(product.price)}원
            </div>
        </Card>
    );
};

export default ProductCard;
