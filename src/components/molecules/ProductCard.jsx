import Card from '../atoms/Card';
import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';

const ProductCard = ({ product, className = '' }) => {
    return (
        <Card className={className} to={`/product/${product.id}`}>
            <Photo
                className="cardImage"
                src={`${process.env.REACT_APP_KAKAO_STORE_URL}${product.image}`}
                alt={product.productName}
            />
            <div className="product-name">{product.productName}</div>
            <div className="product-price">{comma(product.price)}</div>
        </Card>
    );
};

export default ProductCard;
