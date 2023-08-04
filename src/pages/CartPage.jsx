import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../services/cart';
import Loader from '../components/atoms/Loader';
import CartList from '../components/molecules/CartList';
import Page from '../components/atoms/Page';

const CartPage = () => {
    const { data } = useQuery(['cart'], () => getCart());

    return <Suspense fallback={<Loader />}><Page>{data && <CartList data={data} />}</Page></Suspense>;
};

export default CartPage;
