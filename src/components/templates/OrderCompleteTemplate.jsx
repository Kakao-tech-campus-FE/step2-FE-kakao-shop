/* eslint-disable-next-line no-unsafe-optional-chaining */
import { useMutation } from '@tanstack/react-query';
import { getOrderFromId } from '../../services/order';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';

const OrderCompleteTemplate = ({ data }) => {
    // 사용자의 장바구니 목록을 조회해서 보여주는 것

    const { products, totalPrice } = data.data.response || undefined;

    const OrderItems = () => {
        let renderComponent = [];
        if (Array.isArray(products) === false) return;

        products.forEach((item) => {
            // item : 각 상품, carts: 옵션이 담김
            renderComponent.push(
                item.items.map((cart) => {
                    return (
                        <div key={cart.id} className="p-4 border-t w-full">
                            <div className="product-name font-semibold">
                                <span>{`${item.productName}`}</span>
                            </div>
                            <div className="quantity flex gap-3 text-gray-500 mb-2">
                                <span>{`[${cart.optionName}]`}</span>
                                <span>{comma(cart.quantity)}개</span>
                            </div>
                            <div className="price font-semibold">
                                <span>{comma(cart.price)}원</span>
                            </div>
                        </div>
                    );
                })
            );
        });

        return renderComponent;
    };

    return (
        <div className="mx-auto max-w-[1024px] w-[100%] px-5 flex flex-col gap-3">
            <div>
                <div className="border p-5 flex justify-center">
                    <h1 className="text-lg font-bold">주문이 정상적으로 완료되었습니다.</h1>
                </div>
                <div className="flex flex-col gap-1 border p-4">
                    <h1 className="text-lg font-bold mb-2">배송지 정보</h1>
                    <div className="name flex items-center gap-2">
                        <span className="text-base font-semibold">홍길동</span>
                        <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
                            기본배송지
                        </span>
                    </div>
                    <div>
                        <span className="text-sm">010-0000-0000</span>
                    </div>
                    <div>
                        <span className="text-sm text-gray-500">
                            서울특별시 강남구 도곡동 000-00
                        </span>
                    </div>
                </div>
            </div>
            <div></div>
            <div className="border p-4">
                <h2 className="text-lg font-bold my-2">주문상품 정보</h2>
                {/* 각 주문의 정보 */}
                <OrderItems />
            </div>

            {/* 총 주문 금액 */}
            <div className="border p-4 flex items-center justify-between">
                <h3 className="font-bold">총 주문 금액</h3>
                <span className="pric text-xl text-blue-700">{comma(totalPrice)}원</span>
            </div>
        </div>
    );
};

export default OrderCompleteTemplate;
