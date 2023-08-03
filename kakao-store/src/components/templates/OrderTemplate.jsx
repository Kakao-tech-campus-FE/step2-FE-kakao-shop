import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../apis/order";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const OrderTemplate = ({ data }) => {
    const { products, totalPrice } = data?.data?.response;
    const navigate = useNavigate();

    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);

    const allAgreeRef = useRef(null);
    const agreePaymentRef = useRef(null);
    const agreePolicyRef = useRef(null);

    const handleAgreement = (e) => {
        const { name, checked } = e.target;

        if(name === "payment-agree") {
            setAgreePayment(checked);
        }
        else if(name === "policy-agree") {
            setAgreePolicy(checked);
        }
        else {
            setAgreePayment(checked);
            setAgreePolicy(checked);
        }
    }

    const { mutate } = useMutation({
        mutationKey: "order",
        mutationFn: order
    })

    const OrderItems = () => {
        let renderComponent = [];
        if(Array.isArray(products) === false) return ;
        
        products.forEach((item) => {
            renderComponent.push(item.carts.map(cart => {
                return (
                    <div key={cart.id} className="p-4 border-t">
                        <div className="font-bold product-name">
                            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                        </div>
                        <div className="quantity">
                            <span>{comma(cart.quantity)}개</span>
                        </div>
                        <div className="font-bold price">
                            <span>{comma(cart.price * cart.quantity)}원</span>
                        </div>
                    </div>
                )
            })); 
        });

        return renderComponent;
    }

    return (
        <div>
            <div className="max-w-[1024px] mx-auto w-[100%]">
                <div className="p-4">
                    <h1 className="font-bold text-md">결제하기</h1>
                </div>
                <div className="p-4 border">
                    <h2 className="text-sm font-bold">배송지 정보</h2>
                </div>
                <div className="p-4 border">
                    <div className="flex items-center gap-2">
                        <span>홍길동</span>
                        <span className="p-1 text-sm text-blue-400 bg-blue-100 rounded-md">
                            기본배송지
                        </span>
                    </div>
                </div>
                <div className="p-4 border">
                    <span>
                        010-0000-0000
                    </span>
                </div>
                <div className="p-4 border">
                    <span>
                        서울특별시 강남구 도곡동 000-00
                    </span>
                </div>
                <div className="p-4 border">
                    <h2>주문상품 정보</h2>
                </div>
                {/* 각 주문의 정보 */}
                <div className="p-4 border">
                    {<OrderItems />}
                </div>
                {/* 총 주문 금액 */}
                <div className="flex items-center justify-between p-4 border">
                    <h3 className="text-xl font-bold">총 주문 금액</h3>
                    <span className="text-xl text-indigo-700 price">{comma(totalPrice)}원</span>
                </div>
                {/* 전체 동의, 구매 조건 확인 및 결제 진행 동의 */}
                <div className="flex flex-col p-4 ">
                    <div className="flex gap-2">
                        <input type="checkbox" id="all-agree" name="all-agree" ref={allAgreeRef} checked={agreePayment && agreePolicy}
                            value={agreePayment && agreePolicy} onChange={handleAgreement}/>
                        <label htmlFor="all-agree" className="text-xl font-bold">
                            전체 동의
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="payment-agree" name="payment-agree" ref={agreePaymentRef} checked={agreePayment} value={agreePayment} onChange={handleAgreement} />
                        <label htmlFor="payment-agree" className="text-sm">
                            구매조건 확인 및 결제 진행 동의
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="policy-agree" name="policy-agree" ref={agreePolicyRef} checked={agreePolicy} value={agreePolicy} onChange={handleAgreement} />
                        <label htmlFor="policy-agree" className="text-sm">
                            개인정보 제 3자 제공 동의
                        </label>
                    </div>
                    {/* 결제하기 버튼 */}
                    <button className={`w-full p-4 font-medium ${agreePayment && agreePolicy ? "bg-yellow-500 text-black" : "bg-gray-300 text-gray-500"}`}
                        onClick={() => {
                            // POST: /orders/save
                            // 장바구니에 있는 모든 항목이 결제로 저장
                            // 장바구니는 비워짐
                            // 페이지 이동 -> 주문완료 페이지 (리턴 받은 주문 아이디)
                            // /orders/complete/:id
                            mutate(null, {
                                onSuccess: (res) => {
                                    alert("주문이 완료되었습니다.");
                                    navigate(`/orders/complete/${res.data.response.id}`);
                                },
                                onError: () => {
                                    alert("주문에 실패했습니다.");
                                }
                            })
                        }}>
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderTemplate;