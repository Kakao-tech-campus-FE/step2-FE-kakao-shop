import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetail } from '../store/slices/detailSlice';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';

const ProductDetailPage = () => {
  const { id } = useParams(); // string
  //   const parsedId = parseInt(id, 10);
  const dispatch = useDispatch();
  const {
    data: detail,
    error,
    isLoading,
  } = useQuery(`/product/${id}`, () => getProductById(id));

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <div>{detail.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
