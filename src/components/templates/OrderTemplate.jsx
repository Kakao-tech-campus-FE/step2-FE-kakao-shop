import OrderItems from '../organisms/OrderItems';
import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../services/cart';
import { comma } from '../../utils/comma';
import { useEffect } from 'react';

const OrderTemplate = () => {
    const { data, error, isLoading } = useQuery(["/order"], getCart);

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <OrderTemplateContainer>
            <OrderInformationBox>
                <UserDefaultInformation>
                    <OrderTemplateTitle>주문하기</OrderTemplateTitle>
                </UserDefaultInformation>
                <UserDefaultInformation>
                    <span>배송지 정보</span>
                </UserDefaultInformation>
                <UserDefaultInformation>
                    <span>김배송</span>
                    <UserDefaultPlaceInformation>기본 배송지</UserDefaultPlaceInformation>
                </UserDefaultInformation>
                <UserDefaultInformation>
                    <span>010-0000-0000</span>
                </UserDefaultInformation>
                <UserDefaultInformation>주문상품 정보</UserDefaultInformation>
                <UserDefaultInformationLast>
                    <OrderItems />
                </UserDefaultInformationLast>
            </OrderInformationBox>

            <OrderInformationBox>
                <TotalPriceBox>
                    <h3>총 주문 금액</h3>
                    <span>{comma(data?.data?.response.totalPrice)}원</span>
                </TotalPriceBox>
            </OrderInformationBox>

            {/* 구매조건 확인 & 결제 진행 동의 */}
            <OrderInformationBox>
                <UserPermissionBox>
                    <UserPermissionAll>
                        <input type="checkbox" id="all-agree" />
                        <label htmlFor='all-agree'>전체 동의</label>
                    </UserPermissionAll>
                    <UserPermission>
                        <input type="checkbox" id="policy" />
                        <label htmlFor='policy'>구매조건 확인 및 결제 진행 동의</label>
                    </UserPermission>
                    <UserPermission>
                        <input type="checkbox" id="agree" />
                        <label htmlFor='agree'>개인정보 제 3자 제공동의</label>
                    </UserPermission>
                </UserPermissionBox>
                <PaymentButton>결제하기</PaymentButton>
            </OrderInformationBox>
        </OrderTemplateContainer>
    );
};

export default OrderTemplate;

const OrderTemplateContainer = styled.div`
`

const OrderInformationBox = styled.div`
    border: 1px solid #ddd;
    margin-bottom : 50px;
`
const UserDefaultInformation = styled.div`
    border-bottom:1px solid #ddd;
    padding : 10px;
`

const UserDefaultInformationLast = styled.div`
    padding : 10px;
`

const UserDefaultPlaceInformation = styled.span`
    color : #004cffac;
    background-color: #bef6f6;
    border-radius: 10px;
    margin-left: 10px;
    padding: 5px;
`

const OrderTemplateTitle = styled.p`
    text-align: center;
    font-size: 2rem;
`

const TotalPriceBox = styled.div`
    display: flex;
    padding : 10px;
    justify-content: space-between;
`

const UserPermissionBox = styled.div`
    padding : 10px;
`

const UserPermissionAll = styled.div`
    display : flex;
    & > label  {
        font-size : 1.4rem;
        margin-left : 0.6rem;
    }
`

const UserPermission = styled.div`
    display : flex;
    & > label  {
        margin-left : 0.6rem;
    }
`

const PaymentButton = styled.div`
    width: 100%;
    padding: 8px 0 8px 0;
    background-color: #ffe100;
    text-align: center;
    cursor: pointer;
`