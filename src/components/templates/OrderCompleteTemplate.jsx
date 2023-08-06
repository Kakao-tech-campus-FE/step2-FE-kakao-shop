import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrderFromId } from "../services/orders"
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { comma } from './../../utils/comma';
import OptiomItem from "../atoms/OptiomItem";

const OrderCompleteTemplate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useQuery([`/orders/${id}`], () => getOrderFromId(id), {
        suspense : true,
    });
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])
    
    const ProductItems = data?.data?.response?.products.map((product) => {
        return (
            <ProductItemBox key={product.id}>
                <div className="label">상품명</div>
                <p>{product.productName}</p>
                <OptiomItem items={product.items} />
            </ProductItemBox>
        );
    })

    return (
        <OrderCompleteBox>
            <div className="complete-message">
                <h1>구매완료!</h1>
                <h2>구매가 정상적으로 완료되었습니다.</h2>
            </div>
            <OrderDetailBox>
                <div className="header">
                    주문상품 정보
                </div>
                <div className="product-list">
                    {ProductItems}
                    <div className="label">총 금액 {comma(totalPrice)}원</div>
                </div>
            </OrderDetailBox>
            <OrderDetailBox>
                <PriceResultBox>
                    <div>일반 결제 금액</div>
                    <div>{comma(totalPrice)}원</div>
                </PriceResultBox>
                <div className="shopping-go" onClick={() => navigate("/")}> 
                    쇼핑 계속하기
                </div>
            </OrderDetailBox>
        </OrderCompleteBox>
    );
};

export default OrderCompleteTemplate;

const OrderCompleteBox = styled.div`
    min-width : 750px;
    & > .complete-message {
        text-align: center;
        h1 {
            font-size : 2.4rem;
        }
    }
`

const OrderDetailBox = styled.div`
    margin-top : 30px;
    border : 1px solid #ddd;
    & > .header {
        text-align : center;
    }
    & > .shopping-go {
        width: 100%;
        padding: 8px 0 8px 0;
        background-color: #ffe100;
        text-align : center;
        cursor: pointer;
    }
    & > .header {
        padding : 16px 0;
        border-bottom : 1px solid #ddd;
    }
    & > .product-list {
        background-color : #00000014;
        padding : 10px 20px;
    }
`
const PriceResultBox = styled.div`
    display : flex;
    padding : 22px 14px;
    justify-content: space-between;
`

const ProductItemBox = styled.div`
    border : 1px solid #ddd;
    background-color : #fff;
    margin : 20px 0px;
    padding : 10px;
    & > .label {
        font-size : 1.4rem;
    }
`