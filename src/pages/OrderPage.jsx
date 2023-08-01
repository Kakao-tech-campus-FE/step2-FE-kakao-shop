import React, { Suspense } from 'react';
import OrderTemplate from '../components/templates/OrderTemplate';
import Loader from '../components/atoms/Loader';
import {useQuery,useMutation} from 'react-query';
import { getCart } from '../services/cart';
//suspense 사용하기
const OrderPage = () => {
    const {data,error, isLoading} = useQuery(getCart);
    return (
        <Suspense fallback={<Loader/>}>
            <OrderTemplate data={data}></OrderTemplate>
        </Suspense>
    );
};

export default OrderPage;