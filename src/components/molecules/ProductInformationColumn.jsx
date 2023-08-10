import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import StarRating from "../organisms/StarRating";

const staticServerUri = process.env.REACT_APP_PATH || "";


const ProductInformationColumn = ({ product}) => {
    const { productName, price} = product;

return (
    <div className="flex">
        <div className="col">
            <Photo src={`${staticServerUri}/assets${product.image}`} alt={productName} className="w-60 h-60 rounded-lg"/>
        </div>
        <div className="col">
        <StarRating starCount={product.starCount}/>
        <div className="pb-1 text-xl">{product.productName}</div>
            <p className="mx-1">톡딜가 {comma(price)}원</p>
        </div>
    </div>
);
};

export default ProductInformationColumn;