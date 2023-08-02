import { comma } from './../../utils/convert';
import { useEffect, useState } from 'react';

const OrderCompleteTemplate = ({ data }) => {
    const [ products, setProducts ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        data?.data?.response?.products !== undefined &&
            setProducts(data?.data?.response?.products);
        data?.data?.response?.totalPrice !== undefined &&
            setTotalPrice(data?.data?.response?.totalPrice);
    },[data]);

    return (
        <section>
            <div className='max-w-[870px] w-full mx-auto'>
                <div className="complete-message">
                    <h1>구매 완료</h1>
                    <h2>구매가 정상적으로 완료됐습니다</h2>
                </div>
                <div className="p-4 border-t">
                    <h2 className="font-semibold text-lg pb-2">배송지 정보</h2>
                    <div className="flex items-center gap-2" >
                        <span className="font-semibold text-lg">박건형</span>
                        <span className="text-blue-400 bg-sky-100 rounded w-[100px] text-center text-sm">기본 배송지</span>
                    </div>
                    <div className="pt-1">
                        <span className="text-sm">010-0000-0000</span>
                    </div>
                    <div>
                        <span className="text-sm">광주광역시 북구 용봉로 77 (전남대학교)</span>
                    </div>        
                </div>
                <div className="detail-box">
                    <div className="header">
                        주문상품 정보
                    </div>
                </div>
                <div className="product-list">
                    {products.map((product) => {
                        return <div className="product">
                            <div className="label">상품명</div>
                            <p>{product.productName}</p>
                            {product.items.map((item, idx) => {
                                return (
                                    <div key={item.id}>
                                        <div className="label">옵션 {idx + 1}</div>
                                        <p>{item.productName}</p>
                                        <div className="label">구매수량</div>
                                        <p>{item.quantity}</p>
                                        <div className="label">옵션 금액</div>
                                        <p>{item.price}</p>
                                    </div>
                                )
                            })}
                            <div className="label">총금액</div>
                        </div>
                    })}
                </div>
                <div className="p-4 flex items-center justify-between border my-4">
                    <h3 className="text-lg">총 주문 금액</h3>
                    <span className="text-lg font-bold">{comma(totalPrice)}원</span>
                </div>
            </div>
        </section>
    )
} 

export default OrderCompleteTemplate;