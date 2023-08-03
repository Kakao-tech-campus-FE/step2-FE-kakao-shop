import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import Loader from './../components/atoms/Loader';
import { styled } from "styled-components";
import { Suspense } from 'react';


const OrderCompletePage = () => {

    return (
        <Suspense fallback={<Loader />}>
            <OrderCompletePageContainer>
                <OrderCompletePageBox>
                    <OrderCompleteTemplate />
                </OrderCompletePageBox>
            </OrderCompletePageContainer>
        </Suspense>
    );
};

export default OrderCompletePage;

const OrderCompletePageContainer = styled.div`
    margin-top: 180px;
`

const OrderCompletePageBox = styled.div`
    width: 40%;
    margin: 0 auto;
`