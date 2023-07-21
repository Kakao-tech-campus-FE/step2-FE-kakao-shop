import CartList from './../components/molecules/CartList';
import Loader from './../components/atoms/Loader';
import { getCart } from '../components/services/cart';
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';

// 장바구니 페이지
const CartPage = () => {
    const { data } = useQuery(["/cart"], getCart);

    return (
        <Suspense fallback={<Loader />}>
            <CartListContainer>
                <CartList data={data} />
            </CartListContainer>
        </Suspense>
    );
};

export default CartPage;

const CartListContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 180px;
    
`