import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../apis/product';
import ProductDetailInfo from '../components/molecules/ProductDetailInfo';
import Loader from '../components/atoms/Loader';
import ProductOption from '../components/molecules/ProductOption';
import * as Product from '../styles/pages/ProductDetailPage';
import { Suspense } from 'react';

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // string
  const parsedId = parseInt(id, 10);
  const { data: product, isError } = useQuery(
    ['product', id],
    () => getProductById(parsedId),
    {
      onError: (error) => {
        console.log(`something went wrong ${error.mssage}`);
        navigate('/error');
      },
    },
    { suspense: true }
  );

  if (isError) {
    navigate('/error');
  }

  return (
    <Product.Container>
      <Suspense fallback={<Loader className="productDetail" />}>
        <ProductDetailInfo product={product.data} />
        <ProductOption product={product.data} />
      </Suspense>
    </Product.Container>
  );
};

export default ProductDetailPage;
