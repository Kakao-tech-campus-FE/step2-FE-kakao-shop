import { useParams } from 'react-router-dom';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../apis/product';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';

const ProductDetailPage = () => {
  const { id } = useParams();

  const { status, data } = useQuery({ queryKey: ['product', id], queryFn: () => getProductById(id) });

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

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <div>error</div>;
  }

  return <div className="product-detail-page">{product && <ProductDetailTemplate product={product} />}</div>;
};

export default ProductDetailPage;
