import CartList from './../components/molecules/CartList';
import Loader from './../components/atoms/Loader';
import Swal from 'sweetalert2';
import { loginNeedMessage } from '../utils/constants';
import { Suspense } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// 장바구니 페이지
const CartPage = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    // 장바구니 페이지에서 만약 로그인이 만료되었을 경우 로그인 페이지로 이동
    useEffect(() => {
        if(localStorage.getItem("token") == null) {
            Swal.fire(loginNeedMessage);
            navigate("/login");
        }
    }, [navigate])

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