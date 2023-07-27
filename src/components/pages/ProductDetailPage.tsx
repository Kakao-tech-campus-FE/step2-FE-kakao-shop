import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProductById } from '@api/productApi';
import Loader from '@components/atoms/Loader';
import ProductDetailTemplate from '@components/templates/ProductDetailPage/ProductDetailTemplate';

const ProductDetailPage = () => {
  const { id } = useParams();
  const parseId = id !== undefined ? parseInt(id, 10) : 1;
  const { data, error, isLoading } = useQuery(`/product/${id}`, () => getProductById(parseId));
  const navigate = useNavigate();
  const product = data?.data.response;

  return (
    <>
      {isLoading && <Loader />}
      {error && navigate('/404')}
      {product && <ProductDetailTemplate product={product} />}
    </>
  );
};

export default ProductDetailPage;
