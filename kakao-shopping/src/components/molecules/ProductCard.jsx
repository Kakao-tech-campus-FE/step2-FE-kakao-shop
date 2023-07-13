import Card from "../atoms/Card";
import Photo from "../atoms/Photo";

const ProductCard = ({ product }) => {
    return (
        <Card to={`/product/${product.id}`}>
            <Photo src={product.imageUrl} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className="product-price">{comma(product.price)}원</div>
        </Card>
    );
};

export default ProductCard;
