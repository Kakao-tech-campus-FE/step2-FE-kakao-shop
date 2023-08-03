import Card from "../atoms/Card";
import SkeletonCard from "../atoms/SkeletonCard";
import Photo from "../atoms/Photo";
import { comma } from "../../utils/comma";
import "../../styles/ProductCard.css";


const ProductCard = ({ product, loading }) => {
    return (
        <>
            {loading 
            ? <SkeletonCard/> 
            : <Card to={`/product/${product.id}`}>
                <Photo src={product.image} alt={product.productName}/>
                <div className="product-name">{product.productName}</div>
                <div className="product-price">{comma(product.price)}원</div>
                {/* 가격 표기를 10,000 <- 이런식으로 하기 위해 유틸 함수를 만들어서 사용 */}
            </Card>
            }
        </>
    );
};

export default ProductCard;