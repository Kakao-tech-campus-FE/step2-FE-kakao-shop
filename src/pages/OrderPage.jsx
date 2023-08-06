import OrderTemplate from '../components/templates/OrderTemplate';
import Swal from 'sweetalert2';
import Loader from '../components/atoms/Loader';
import { Suspense } from 'react';
import { loginNeedMessage } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { styled } from 'styled-components';

const OrderPage = () => {
    const navigate = useNavigate();

    // 주문하기 페이지에서 만약 로그인이 만료되었을 경우 로그인 페이지로 이동
    useEffect(() => {
        if(localStorage.getItem("token") == null) {
            Swal.fire(loginNeedMessage);
            navigate("/login");
        }
    }, [navigate])

    return (
        <Suspense fallback={<Loader />}>
            <OrderPageContainer>
                <OrderPageBox>
                    <OrderTemplate />   
                </OrderPageBox>
            </OrderPageContainer>
        </Suspense>
    );
};

export default OrderPage;

const OrderPageContainer = styled.div`
    margin-top: 180px;
`
const OrderPageBox = styled.div`
    width: 60%;
    margin: 0 auto;
`