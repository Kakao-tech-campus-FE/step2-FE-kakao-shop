import React, { useEffect, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../store/slices/detailSlice';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import { useQuery } from 'react-query';

// import ProductInformationColumn from '../components/molecules/ProductInformationColumn';
// import OptionColums from '../components/molecules/OptionColums';

const ProductInformationColumn = React.lazy(() => import('../components/molecules/ProductInformationColumn'));
const OptionColums = React.lazy(() => import('../components/molecules/OptionColums'));

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery(`/product/${id}`, () => getProductById(id));
  // const {
  //   data: detail,
  //   error,
  //   isLoading,
  // } = useQuery(`product/${id}`, () => getProductById(id)); // 구분자, API 요청 함수 / deatilSlice 필요없음

  // 비동기 함수
  // 50초랑 20초 요청이 있으면 동시에 출발
  // 여러 비동기를 다 받고 처리를 해야한다고 한다면
  // useQueries([]) 사용
  // 단일 비동기는 useQuery 사용
  const product = data?.data.response;

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {product && (
          <div className="flex px-40 ">
            <span className="w-1/2">
              <ProductInformationColumn product={product} />
            </span>

            <span className="border-gray w-1/2 border-l p-10">
              <OptionColums product={product} />
            </span>
          </div>
        )}
      </Suspense>

      {/* <OptionColums product={product} /> */}
      {/* loading state 
      error state */}
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <div>{data.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
