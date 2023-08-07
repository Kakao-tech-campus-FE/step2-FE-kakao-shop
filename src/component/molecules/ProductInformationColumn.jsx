import {comma} from '../../utils/convert';
import Photo from '../atoms/Photo';

	const staticServerUrl = "https://user-app.krampoline.com/k070a976b7d47a"
const ProductInformationColumn = ({product}) => {
  const {productName, price, image} = product;
  return (
       <div className="flex py-8 pr-8 w-[400px]">
                <Photo src={staticServerUrl+ product.image} alt={product.productName} />
            
    </div>
  );
}

export default ProductInformationColumn;