import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import { comma } from "../../utils/comma";

const ProductCard = ({ product }) => {
    return (
        <>
            <Card to={`/product/${product.id}`}>
                <Photo src={product.imageUrl} alt={product.productName}/>
                <div className="product-name">{product.productName}</div>
                <div className="product-price">{comma(product.price)}원</div>
                {/* 가격 표기를 10,000 <- 이런식으로 하기 위해 유틸 함수를 만들어서 사용 */}
            </Card>
        </>
    );
};

export default ProductCard;