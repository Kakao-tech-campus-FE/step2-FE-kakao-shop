import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderFromId } from '../services/order';
import Loader from '../components/atoms/Loader';
import CompleteTemplate from '../components/templates/CompleteTemplate';

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(
    [`/orders/complete/${id}`, id],
    () => getOrderFromId(id),
  );
  return (
    <Suspense fallback={<Loader />}>
      <CompleteTemplate data={data?.data?.response} />
    </Suspense>
  );
};

export default OrderCompletePage;
