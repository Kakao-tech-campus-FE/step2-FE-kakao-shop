import Photo from "../atoms/Photo";
import { comma } from '../../utils/convert'

const ProductInformationColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <div>
            <img src={process.env.REACT_APP_API_URL + image} alt="name"></img>
            <h1>{productName}</h1>
            <p>{comma(price)}원</p>
        </div>
    );
};

export default ProductInformationColumn;