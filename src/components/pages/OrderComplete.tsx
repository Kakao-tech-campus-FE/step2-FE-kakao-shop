import { orderResult } from '@api/orderApi';
import Loader from '@components/atoms/Loader';
import OrderCompleteTemplate from '@components/templates/OrderCompleteTemplate';
import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const OrderComplete = () => {
  const { id } = useParams();
  const parseId = id !== undefined ? parseInt(id, 10) : 1;
  const { data, error } = useQuery(`/order/${id}`, () => orderResult(parseId));

  return <Suspense fallback={<Loader />}>{data && <OrderCompleteTemplate data={data.data} />}</Suspense>;
};

export default OrderComplete;
