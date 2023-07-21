import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../hooks/query';
import ProductDetailTemplate from '../templates/productDetailTemplate';
import Loader from '../atoms/loader';
import { ProductDetail } from '../../types/product';
import { useOptionReducer } from '../../hooks/useOptionReducer';

export default function ProductDetailPage() {
  const { productId } = useParams();
  if (productId === undefined) {
    return <div>Error</div>;
  }

  const { data, isLoading, isError } = useProductDetail(+productId);
  const productDetail: ProductDetail = data?.data.response;

  const { selectedOptions, dispatch } = useOptionReducer();

  return (
    <>
      {isLoading ? <Loader /> : null}
      {productDetail ? (
        <ProductDetailTemplate
          data={productDetail}
          selectedOptions={selectedOptions}
          dispatch={dispatch}
        />
      ) : null}
      <div>{isError ? '상품을 찾을 수 없습니다.' : null}</div>
    </>
  );
}
