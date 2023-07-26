import { styled } from 'styled-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCart } from '../services/cart';
import { comma } from '../../utils/comma';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { order } from './../services/orders';

const OrderTemplate = () => {
    const { data } = useQuery(["/order"], getCart);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);
    const navigate = useNavigate();

    const allAgreeRef = useRef(null);
    const agreePaymentRef = useRef(null);
    const agreePolicyRef = useRef(null);

    const handleAllAgree = (e) => {
        const value = e.target.checked;
        setAgreePayment(value);
        setAgreePolicy(value);
    }

    const handleAgreement = (e) => {
        const { name, checked } = e.target;
        if (name === "payment-agree") {
            setAgreePayment(checked);
        } else if (name === "policy-agree") {
            setAgreePolicy(checked);
        }
    }

    const { mutate } = useMutation({
        mutationKey: "order",
        mutationFn : order,
    })

    useEffect(() => {
        console.log(data);
        setProducts(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    const OrderItems = () => {
        let renderComponent = [];
        if (products) {
            products.forEach((item) => {
                // item : 각 상품 & carts : 옵션이 담겨있음
                renderComponent.push(item.carts.map((cart) => {
                    return (
                        <div key={cart.id}>
                            <div className='product-name'>
                                <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                            </div>
                            <div className='quantity'>
                                <span>{comma(cart.quantity)}개</span>
                            </div>
                            <div className='price'>
                                <span>{comma(cart.option.price * cart.quantity)}원</span>
                            </div>
                        </div>
                    )
                }))
            })
        }
        return renderComponent;
    }

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
                    <span>{comma(totalPrice)}원</span>
                </TotalPriceBox>
            </OrderInformationBox>

            {/* 구매조건 확인 & 결제 진행 동의 */}
            <OrderInformationBox>
                <UserPermissionBox>
                    <UserPermissionAll>
                        <input 
                            type="checkbox" 
                            id="all-agree" 
                            ref={allAgreeRef} 
                            checked={agreePayment & agreePolicy} 
                            onChange={handleAllAgree} 
                        />
                        <label htmlFor='all-agree'>전체 동의</label>
                    </UserPermissionAll>
                    <UserPermission>
                        <input 
                            type="checkbox" 
                            id="agree"
                            name="payment-agree"
                            ref={agreePaymentRef}
                            checked={agreePayment}
                            onChange={handleAgreement}
                        />
                        <label htmlFor='policy'>구매조건 확인 및 결제 진행 동의</label>
                    </UserPermission>
                    <UserPermission>
                        <input 
                            type="checkbox" 
                            id="policy" 
                            name="policy-agree"
                            ref={agreePolicyRef}
                            checked={agreePolicy}
                            onChange={handleAgreement}
                        />
                        <label htmlFor='agree'>개인정보 제 3자 제공동의</label>
                    </UserPermission>
                </UserPermissionBox>
                <PaymentButton 
                backgroundColor={agreePayment && agreePolicy ? "#ffe100" : "#bbbbbb"}
                onClick={() => {
                    if (agreePayment === false || agreePolicy === false) {
                        alert("모든 항목에 동의해주세요.");
                        return
                    }

                    mutate(null, {
                        onSuccess: (res) => {
                            console.log(res);
                            console.log(res.response);
                            const id = res.response.id;
                            console.log(id);
                            alert("주문이 완료되었습니다.");
                            navigate(`/orders/complete/${id}`)
                        },
                        onError: (error) => {
                            alert("주문에 실패하였습니다.")
                        }
                    })
                }}>
                    결제하기
                </PaymentButton>
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
    background-color: ${(props) => props.backgroundColor};
    text-align: center;
    cursor: pointer;
    transition: all 1s;
`