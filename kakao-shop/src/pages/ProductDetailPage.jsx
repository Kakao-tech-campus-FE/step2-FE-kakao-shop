import { useParams } from 'react-router-dom';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../apis/product';
import { useQuery } from '@tanstack/react-query';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import Error from '../components/atoms/Error';
import { Suspense } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { status, data, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    retry: false,
  });

  const product = data?.data?.response;

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'error') {
    if (error?.response?.status === 404) {
      // 등록되지 않은 상품(id) 조회 시
      return <Error message="상품 정보를 찾을 수 없습니다." />;
    }
    return <Error message="상품 정보를 불러오는 중 에러가 발생했습니다." />;
  }

  return (
    <div className="product-detail-page">
      <Suspense fallback={<Loader />}>{product && <ProductDetailTemplate product={product} />}</Suspense>
    </div>
  );
};

export default ProductDetailPage;
