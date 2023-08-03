import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import { ErrorPage } from './ErrorPage';

const ProductDetailPage = () => {
  const route = useNavigate();
  const { id } = useParams(); // string
  //   const parsedId = parseInt(id, 10);
  const { data, error, isLoading } = useQuery([`/product/${id}`, id], () =>
    getProductById(id),
  );
  // useEffect(() => {
  //   console.log(data); // data 객체를 콘솔에 출력
  // }, [data]);

  const product = data?.data?.response;
  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorPage message={error.message} />}
      {data && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;

// product에 우리가 원하는 데이터가 정확하게 존재하는지 판별하는 방법
// const validate = () => {
//   if (!product) {
//     return false;
//   }
//   // key 들이 실제로 돌아가는 지 반복문을 통해 찾는다.

//   const requiredKeys = ['id', 'productName'];
//   const keys = Object.keys(product); // ['id', 'productName'..]
//   for (let i = 0; i < requiredKeys.length; i++) {
//     const requiredKey = requiredKeys[i];
//     if (!keys.includes(requiredKey)) {
//       alert(`Product 객체에 ${requiredKey}가 존재하지 않습니다`);
//       return false;
//     }
//   }
//   return true;
// };
