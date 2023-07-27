import CartList from './../components/molecules/CartList';
import Loader from './../components/atoms/Loader';
import { Suspense } from 'react';
import { styled } from 'styled-components';
// import { useQuery } from '@tanstack/react-query';
// import { getCart } from '../components/services/cart';

// 장바구니 페이지
const CartPage = () => {
    // const { data } = useQuery(["/cart"], getCart);
    const token = localStorage.getItem("token");

    return (
        <CartPageContainer>
            <Suspense fallback={<Loader />}>
                {token 
                ? 
                <CartListContainer>
                    <CartList />
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