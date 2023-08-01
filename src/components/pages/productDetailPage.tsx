import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useProductDetail } from '../../hooks/query';
import ProductDetailTemplate from '../templates/productDetailTemplate';
import { ProductDetail } from '../../types/product';
import { useOptionReducer } from '../../hooks/useOptionReducer';
import ErrorTemplate from '../templates/errorTemplate';

export default function ProductDetailPage() {
  const { productId } = useParams();

  // 상품 번호 parameter가 유효하지 않을 경우
  if (productId === undefined || Number.isNaN(+productId)) {
    return <ErrorTemplate errorMessage="잘못된 상품 번호입니다." />;
  }

  const { data, error } = useProductDetail(+productId);
  const productDetail: ProductDetail = data?.data.response;

  const { selectedOptions, dispatch } = useOptionReducer();

  // 상품 API 요청 중 error가 발생한 경우
  if (error !== null && error instanceof AxiosError) {
    return <ErrorTemplate errorMessage={error.response?.data.error.message} />;
  }

  return (
    <ProductDetailTemplate
      data={productDetail}
      selectedOptions={selectedOptions}
      dispatch={dispatch}
    />
  );
}
