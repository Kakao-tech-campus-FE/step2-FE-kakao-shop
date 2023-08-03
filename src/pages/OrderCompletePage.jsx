import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrderFromId } from "../components/services/orders";
import { Suspense } from 'react';
import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import Loader from './../components/atoms/Loader';

const OrderCompletePage = () => {
    const { id } = useParams();
    const { data } = useQuery([`/orders/${id}`], getOrderFromId)

    return (
        <Suspense fallback={<Loader />}>
            <OrderCompletePageContainer>
                <OrderCompletePageBox>
                    <OrderCompleteTemplate data={data} />
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
    width: 60%;
    margin: 0 auto;
`