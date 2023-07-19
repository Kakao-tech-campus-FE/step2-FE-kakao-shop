import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProductById } from '@api/productApi';
import { getDetail } from '@store/slices/detailSlice';

const ProductDetailPage = () => {
  const { id } = useParams(); // string or undefined
  const parseId = id && parseInt(id, 10);
  const { data, error, isLoading } = useQuery(`/product/${id}`, () => getProductById);
  if (error) {
    return alert('그런 페이지 없음');
  }

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getDetail(parseId));
  }, [dispatch, id]);

  return <div />;
};

export default ProductDetailPage;
