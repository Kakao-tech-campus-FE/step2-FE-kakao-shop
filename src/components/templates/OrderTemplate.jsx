/* eslint-disable-next-line no-unsafe-optional-chaining */
import { useMutation } from '@tanstack/react-query';
import { order } from '../../services/order';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const OrderTemplate = ({ data }) => {
    // 사용자의 장바구니 목록을 조회해서 보여주는 것
    const { products, totalPrice } = data.data.response || undefined;
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationKey: 'order',
        mutationFn: order,
    });

    /* 결제&정책 동의 */
    const [allAgree, setAllAgree] = useState(false);
    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);

    const allAgreeRef = useRef(null);
    const agreePaymentRef = useRef(null);
    const agreePolicyRef = useRef(null);

    const handleAllAgree = (e) => {
        const value = e.target.checked;
        setAgreePayment(value);
        setAgreePolicy(value);
    };
    const handleAgreement = (e) => {
        const { name, checked } = e.target;

        if (name === 'payment-agree') {
            setAgreePayment(checked);
        }

        if (name === 'policy-agree') {
            setAgreePolicy(checked);
        }

        if (!checked) {
            setAllAgree(false);
        }
    };

    useEffect(() => {
        setAllAgree(agreePayment && agreePolicy);
    }, [agreePayment, agreePolicy]);

    // products 안에 있는 item
    //
    // 1개당 가격 : item.carts[0].price * item.carts[0].quantity

    const OrderItems = () => {
        let renderComponent = [];
        if (Array.isArray(products) === false) return;

        products.forEach((item) => {
            // item : 각 상품, carts: 옵션이 담김
            renderComponent.push(
                item.carts.map((cart) => {
                    return (
                        <div key={cart.id} className="p-4 border-t w-full">
                            <div className="product-name font-semibold">
                                <span>{`${item.productName}`}</span>
                            </div>
                            <div className="quantity flex gap-3 text-gray-500 mb-2">
                                <span>{`[${cart.option.optionName}]`}</span>
                                <span>{comma(cart.quantity)}개</span>
                            </div>
                            <div className="price font-semibold">
                                <span>{comma(cart.price * cart.quantity)}원</span>
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
                <div className="border p-2 flex justify-center">
                    <h1 className="text-sm font-bold">주문하기</h1>
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

            {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
            <div className="border flex flex-col p-4 gap-5">
                <div className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                        name="all-agree"
                        id="all-agree"
                        ref={allAgreeRef}
                        checked={allAgree}
                        onChange={handleAllAgree}
                    />
                    <label htmlFor="all-agree" className="text-lg font-bold">
                        전체 동의
                    </label>
                </div>
                <div className="flex flex-col gap-3 border-t pt-5">
                    <div className="flex gap-3 items-center">
                        <input
                            type="checkbox"
                            id="agree"
                            name="payment-agree"
                            ref={agreePaymentRef}
                            checked={agreePayment}
                            onChange={handleAgreement}
                        />
                        <label htmlFor="agree" className="text-sm">
                            구매조건 확인 및 결제 진행 동의
                        </label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            id="policy"
                            name="policy-agree"
                            ref={agreePolicyRef}
                            checked={agreePolicy}
                            onChange={handleAgreement}
                        />
                        <label htmlFor="policy" className="text-sm">
                            개인정보 제 3자 제공동의
                        </label>
                    </div>
                </div>
            </div>
            {/* 결제하기 버튼 */}
            <button
                onClick={() => {
                    // 동의가 이뤄지지 않았을 경우 처리
                    if (!allAgree) {
                        alert('모든 항목에 동의가 필요합니다');
                        return;
                    }
                    // POST: /orders/save
                    // DB: 장바구니에 있는 모든 항목이 결제로 저장
                    // 장바구니는 비워짐
                    // 페이지 이동 → 주문완료 페이지(리턴 받은 주문 아이디)
                    // /orders/complete/:id
                    mutate(null, {
                        onError: () => {
                            alert('주문에 실패했습니다.');
                        },
                        onSuccess: (res) => {
                            const id = res.data.response.id;
                            alert('주문이 완료되었습니다.');
                            navigate(`/orders/complete/${id}`);
                        },
                    });
                }}
                className={`w-full p-4 font-medium rounded-md ${
                    allAgree
                        ? 'bg-yellow-300 text-black hover:bg-yellow-400'
                        : 'bg-gray-300 text-gray-500'
                }`}
            >
                결제하기
            </button>
        </div>
    );
};

export default OrderTemplate;
