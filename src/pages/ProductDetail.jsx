import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import { useQuery } from '@tanstack/react-query';

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useQuery(`/product/${id}`, () =>
    getProductById(id)
  );

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <div>{data.productName}</div>}
    </div>
  );
}
