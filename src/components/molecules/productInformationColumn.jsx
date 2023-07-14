import Photo from "../atoms/Photo";
import { comma } from '../../utils/convert'

const productInformationColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <div>
            <Photo src={image} alt={productName}></Photo>
            <h1>{productName}</h1>
            <p>{comma(price)}원</p>

        </div>
    );
};

export default productInformationColumn;