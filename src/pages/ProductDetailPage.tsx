import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProductById } from '@api/productApi';
import { getDetail } from '@store/slices/detailSlice';
import { AppDispatch } from '@store/index';

const ProductDetailPage = () => {
  const { id } = useParams();
  const parseId = id !== undefined ? parseInt(id, 10) : 1;
  const { data, error, isLoading } = useQuery(`/product/${id}`, () => getProductById(parseId));
  const dispatch = useDispatch<AppDispatch>();

  console.log('Asdf');
  useEffect(() => {
    if (data) {
      if (parseId) dispatch(getDetail(parseId));
    }
  }, [dispatch, data, parseId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {id}</div>;
  }

  return <p>Product ID: {id}</p>;
};

export default ProductDetailPage;
