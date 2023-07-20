import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProductById } from '@api/productApi';
import { getDetail } from '@store/slices/detailSlice';
import { AppDispatch } from '@store/index';
import Loader from '@components/atoms/Loader';

const ProductDetailPage = () => {
  const { id } = useParams();
  const parseId = id !== undefined ? parseInt(id, 10) : 1;
  const { data, error, isLoading } = useQuery(`/product/${id}`, () => getProductById(parseId));
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      if (parseId) dispatch(getDetail(parseId));
    }
  }, [dispatch, data, parseId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    navigate(-1);
  }

  return <p>Product ID: {id}</p>;
};

export default ProductDetailPage;
