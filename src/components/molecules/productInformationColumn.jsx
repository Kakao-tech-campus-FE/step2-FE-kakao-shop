
import { comma } from '../../utils/convert'
const staticServerUri = process.env.REACT_APP_PATH || "";
const ProductInformationColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <div>
            <img src={`${staticServerUri}/image`} alt="name"></img>
            <h1>{productName}</h1>
            <p>{comma(price)}원</p>
        </div>
    );
};

export default ProductInformationColumn;
