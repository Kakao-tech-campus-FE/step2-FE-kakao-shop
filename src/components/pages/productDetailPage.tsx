import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../hooks/query';
import ProductDetailTemplate from '../templates/productDetailTemplate';
import { ProductDetail } from '../../types/product';
import { useOptionReducer } from '../../hooks/useOptionReducer';

export default function ProductDetailPage() {
  const { productId } = useParams();

  const { data } = useProductDetail(Number(productId));
  const productDetail: ProductDetail = data?.data.response;

  const { selectedOptions, dispatch } = useOptionReducer();

  return (
    <ProductDetailTemplate
      data={productDetail}
      selectedOptions={selectedOptions}
      dispatch={dispatch}
    />
  );
}
