import Card from '../atoms/card';
import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';

const ProductCard = ({product}) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Photo src={product.imgageUrl} alt={product.productName} />
      <div className='product-name'>{product.productName}</div>
      <div className='product-price'>{comma(product.price)}원</div>
    </Card>
  );
};

export default ProductCard;
