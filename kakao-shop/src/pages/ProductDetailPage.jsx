import { useParams } from 'react-router-dom';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../apis/product';
import { useQuery } from 'react-query';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(`products/${id}`, () => getProductById(id));

  const product = data?.data?.response;

  const validate = () => {
    if (!product) {
      return false;
    }

    const requiredKeys = ['id', 'productName'];

    const keys = Object.keys(product); // Object.prototype method
    const missingKeys = requiredKeys.filter((key) => !keys.includes(key));

    if (missingKeys.length > 0) {
      return false;
    }

    return true;
  };

  return (
    <div className="product-detail-page">
      {isLoading && <Loader />}
      {error && <div>error</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;
