import { useParams } from 'react-router-dom';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import { useQuery } from '@tanstack/react-query';
import NotFound from './NotFound';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';

export default function ProductDetail() {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery([`/product/${id}`, id], () =>
    getProductById(id)
  );
  const product = data?.data?.response;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <NotFound message={error.message} />}
      {data && <ProductDetailTemplate product={product} />}
    </div>
  );
}
