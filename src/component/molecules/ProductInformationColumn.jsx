import {comma} from '../../utils/convert';
import Photo from '../atoms/Photo';

const ProductInformationColumn = ({product}) => {
  const {productName, price, image} = product;
  return (
       <div className="flex py-8 pr-8 w-[400px]">
                <Photo src={'http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com'+ product.image} alt={product.productName} />
            
    </div>
  );
}

export default ProductInformationColumn;