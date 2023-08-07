import {comma} from '../../utils/convert';
import Photo from '../atoms/Photo';

	const staticServerUrl = process.env.REACT_APP_PATH || "";
const ProductInformationColumn = ({product}) => {
  const {productName, price, image} = product;
  return (
       <div className="flex py-8 pr-8 w-[400px]">
                <Photo src={staticServerUrl+ product.image} alt={product.productName} />
            <h1>{productName}</h1>
            <p>{price}원</p>
    </div>
  );
}

export default ProductInformationColumn;