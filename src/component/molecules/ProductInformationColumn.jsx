import "../../styles/molcules/ProductInformationColumn.css";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";


const ProductInformationColumn = ({ product }) => {

    
    const { productName, price, image } = product;
    return (
        <div className="product-information-column">
            <div className="col">
                <Photo src={staticServerUrl + product.image} alt={product.productName} />
            </div>
            <div className="col">
                <p className="review">★★★★★ 리뷰 1,501건</p>
                <h1 className="product-detail-name">{product.productName}</h1>
                <p className="product-detail-price">{comma(product.price)}원</p>
                <p className="ship-fee">배송비 무료</p>
            </div>
        </div>
    );
};

export default ProductInformationColumn;