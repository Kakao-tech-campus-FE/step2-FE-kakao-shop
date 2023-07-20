import { useParams } from 'react-router-dom';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../apis/product';
import { useQuery } from '@tanstack/react-query';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import Error from '../components/atoms/Error';
import { Suspense } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { status, data } = useQuery({ queryKey: ['product', id], queryFn: () => getProductById(id) });

  const product = data?.data?.response;

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    return <Error message="상품 정보를 불러오는 중 에러가 발생했습니다." />;
  }

  return (
    <div className="product-detail-page">
      <Suspense fallback={<Loader />}>{product && <ProductDetailTemplate product={product} />}</Suspense>
    </div>
  );
};

export default ProductDetailPage;
