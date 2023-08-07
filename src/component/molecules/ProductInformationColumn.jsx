import {comma} from '../../utils/convert';
import Photo from '../atoms/Photo';

	const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"
const ProductInformationColumn = ({product}) => {
  const {productName, price, image} = product;
  return (
       <div className="flex py-8 pr-8 w-[400px]">
                <Photo src={staticServerUrl+ product.image} alt={product.productName} />
            
    </div>
  );
}

export default ProductInformationColumn;