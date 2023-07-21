import CartList from './../components/molecules/CartList';
import Loader from './../components/atoms/Loader';
import { getCart } from '../components/services/cart';
import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';

// 장바구니 페이지
const CartPage = () => {
    const { data } = useQuery(["/cart"], getCart);
    const token = localStorage.getItem("token");

    return (
        <CartPageContainer>
            <Suspense fallback={<Loader />}>
                {token 
                ? 
                <CartListContainer>
                    <CartList data={data} />
                </CartListContainer>
                : null
                }
            </Suspense>
        </CartPageContainer>
    );
};

export default CartPage;

const CartPageContainer = styled.div`
    margin-top: 180px;
`

const CartListContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    margin: 0 auto;
    border : 1px solid #ddd;
`