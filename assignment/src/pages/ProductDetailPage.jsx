import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/atoms/Loader';
import { getProductById } from '../services/product';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';

const ProductDetailPage = () => {
  const { id } = useParams();
  //   const parsedId = parseInt(id, 10);
  const { data, error, isLoading } = useQuery([`/product/${id}`, id], () =>
    getProductById(id),
  );

  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailTemplate product={data?.data?.response} />
    </Suspense>
  );
};

export default ProductDetailPage;
