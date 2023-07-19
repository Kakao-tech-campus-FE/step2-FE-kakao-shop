import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetail } from '../store/slices/detailSlice';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import { comma } from '../utils/convert';

const ProductDetailPage = () => {
  const { id } = useParams(); // string
  //   const parsedId = parseInt(id, 10);
  const { data, error, isLoading } = useQuery([`/product/${id}`, id], () =>
    getProductById(id),
  );
  useEffect(() => {
    console.log(data); // data 객체를 콘솔에 출력
  }, [data]);

  // useEffect(() => {
  //   dispatch(getDetail(id));
  // }, [dispatch, id]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && (
        <div>
          <img
            src={process.env.REACT_APP_API_URL + data.data.response.image}
            alt={data.data.response.productName}
          />
          {data.data.response.productName}
          {data.data.response.price}원{data.data.response.starCount}/5 점
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
