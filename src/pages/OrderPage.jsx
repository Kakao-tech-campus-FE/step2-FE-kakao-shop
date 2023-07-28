import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import Loader from '../components/atoms/Loader';
import OrderTemplate from '../components/templates/OrderTemplate';
import { getCart } from '../services/cart';

const OrderPage = () => {
    const { data } = useQuery(['cart'], getCart);
    return <Suspense fallback={<Loader />}>{data && <OrderTemplate data={data} />}</Suspense>;
};

export default OrderPage;
