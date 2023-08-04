import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import Loader from '../components/atoms/Loader';
import OrderTemplate from '../components/templates/OrderTemplate';
import { getCart } from '../services/cart';
import Page from "../components/atoms/Page";

const OrderPage = () => {
    const { data } = useQuery(['cart'], getCart);
    return <Suspense fallback={<Loader />}><Page>{data && <OrderTemplate data={data} />}</Page></Suspense>;
};

export default OrderPage;
