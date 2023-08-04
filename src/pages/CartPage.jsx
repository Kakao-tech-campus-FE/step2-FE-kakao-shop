import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../services/cart';
import Loader from '../components/atoms/Loader';
import CartList from '../components/molecules/CartList';

const CartPage = () => {
    const { data } = useQuery(['cart'], () => getCart());

    return <Suspense fallback={<Loader />}>{data && <CartList data={data} />}</Suspense>;
};

export default CartPage;
