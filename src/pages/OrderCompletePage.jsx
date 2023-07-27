import { styled } from "styled-components";

const OrderCompletePage = () => {
    return (
        <OrderCompletePageContainer>
            <OrderCompletePageBox>
                주문 완료!
            </OrderCompletePageBox>
        </OrderCompletePageContainer>
    );
};

export default OrderCompletePage;

const OrderCompletePageContainer = styled.div`
    margin-top: 180px;
`

const OrderCompletePageBox = styled.div`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
`