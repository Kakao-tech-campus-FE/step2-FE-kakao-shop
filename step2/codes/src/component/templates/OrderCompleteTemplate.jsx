import { comma } from './../../utils/convert';
import { useEffect, useState } from 'react';
import Link from './../atoms/Link';

const OrderCompleteTemplate = ({ data }) => {
    const [ products, setProducts ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);
    
    useEffect(() => {
        data?.data?.response?.products !== undefined &&
            setProducts(data?.data?.response?.products);
        data?.data?.response?.totalPrice !== undefined &&
            setTotalPrice(data?.data?.response?.totalPrice);
    },[data]);


    const getTotalQuantity = () => {
        let totalQuantity = 0;
        totalQuantity = products.reduce((acc, items) => {
            return acc + items.items.reduce((cartTotal, option) => {
                return cartTotal + option.quantity;
            }, 0);
        }, 0);
    
        return totalQuantity;
    };

    const OrderItems = ({ products }) => {
        let renderComponent = [];
    
        products.forEach((item) => {
            renderComponent.push(item.items.map(cart => {
                return (
                    <div key={cart.id} className="p-4 border-b">
                        <div className="product-name">
                            <span className="text-sm font-semibold">{`${item.productName}`}</span>
                        </div>
                        <div className="product-detail">
                            <span className="text-[13px]">{`${cart.optionName}`}, {comma(cart.quantity)}개</span>
                        </div>
                        <div className="price">
                            <span className="text-base"><span className="font-bold">{comma(cart.price)}</span>원</span>
                        </div>
                    </div>
                );
            }));
        });
        return renderComponent;
    };
    

    return (
        <section>
            <div className='max-w-[870px] w-full mx-auto'>
                <div className="complete-message mt-4 border">
                    <div className='text-center mt-10'>
                        <h1 className='text-3xl font-bold'>구매완료!</h1>
                        <h2 className='text-xl font-light mt-2'>구매가 정상적으로 완료되었습니다.</h2>
                    </div>
                    <div className='my-8'>
                        <Link href="/" className='block w-36 p-2 text-center m-auto bg-slate-900 text-white'>
                            <span>쇼핑 계속하기</span>
                        </Link>
                    </div>
                </div>
                <div className="border mt-4">
                    <h2 className="font-semibold text-lg p-4 border-b">배송지 정보</h2>
                    <div className="flex items-center gap-2 px-4 pt-4" >
                        <span className="font-semibold text-lg">박건형</span>
                        <span className="text-blue-400 bg-sky-100 rounded w-[100px] text-center text-sm">기본 배송지</span>
                    </div>
                    <div className="pt-1 px-4">
                        <span className="text-sm">010-0000-0000</span>
                    </div>
                    <div className='px-4 pb-4'>
                        <span className="text-sm">광주광역시 북구 용봉로 77 (전남대학교)</span>
                    </div>        
                </div>
                <div className="border mt-4">
                    <div className=" p-4 border-b">
                        <span className="font-semibold text-lg">주문상품 정보 </span>
                        <span>(총 {getTotalQuantity()}개)</span>
                    </div>
                    {/* 각 주문의 정보 */}
                    <OrderItems products={products} />
                    <div className="h-[46px] text-center leading-[46px]">
                        <span className="text-sky-600">무료배송</span>
                    </div>
                </div>

                <div className="p-4 flex items-center justify-between border my-4">
                    <h3 className="text-lg">총 주문 금액</h3>
                    <span className="text-lg font-bold text-sky-600">{comma(totalPrice)}원</span>
                </div>
            </div>
        </section>
    )
} 

export default OrderCompleteTemplate;