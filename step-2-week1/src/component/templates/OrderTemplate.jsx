import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
// import totalPrice from "../molecules/CartList";
// import cartItems from "../molecules/CartList";
import { useLocation } from "react-router-dom";
import { orderSave } from "../../services/order";

const OrderTemplate = ({ data }) => {
// 사용자의 장바구니 목록을 조회해 보여주는 것

// const products =[];
// const totalPrice = 1000;
// const [ products, totalPrice ] = location.state;

const location = useLocation();
const { cartItems, totalPrice } = location.state;

// const products = location.state;
// const totalPrice = location.state;
// console.log(cartItems);
// console.log(totalPrice);

// const { products, totalPrice } = data?.data?.response;
const navigate = useNavigate();
const [agreePayment, setAgreePayment] = useState(false);
const [agreePolicy, setAgreePolicy] = useState(false);

const allAgreeRef = useRef(null);
const agreePaymentRef = useRef(null);
const agreePolicyRef = useRef(null);

const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePayment(value);
};

const handleAgreement = (e) => {
    const { name, checked } = e.target;

    if (name === "payment-agree") {
        setAgreePayment(checked);
    } else if (name === "policy-agree") {
        setAgreePolicy(checked);
    }
};

const { mutate } = useMutation({
    mutationKey: "order",
    mutationFn: () => order(),
    onError: () => {
        alert("주문에 실패했습니다.");
    },
    onSuccess: (res) => {
        // console.log(res);
        // console.dir(res);
        
        
        const id = res.data.response.id;
        alert("주문이 완료되었습니다.");
        navigate(`/orders/complete/${id}`);
        // 주문 결과 보여주기
        // navigate('/');
        // window.location.reload();

    },
});
// 원래 mutationFn -> queryFn 이었음


const OrderItems = () => {
    let renderComponent = [];

    // forEach, map 동기함수
    cartItems.forEach((item) => {
        renderComponent.push(
            item.carts.map((cart) => {
            return (
                <div key={cart.id} className="p-4 border-t">
                    <div className="product-name font-bold">
                        <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                    </div>
                    <div className="quantity">
                        <span>{comma(cart.quantity)}개</span>
                    </div>
                    <div className="price font-bold">
                        <span>{comma(cart.price * cart.quantity)}원</span>
                    </div>
                </div>
            )
        }));

    });

    return renderComponent;
}

    return (
    <div className="py-20">
        <div className="block mx-auto max-w-[1024px] w-[100%]">
            <div className="border p-2">
            <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border p-4">
            <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
            <div className="flex items-center gap-2">
                <span>홍길동</span>
                <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-2">
                    기본배송지
                </span>
            </div>
        </div>
        <div className="border p-4">
            <span>010-0000-0000</span>
        </div>
        <div className="border p-4">
            <span>서울특별시 강남구 도곡동 000-00</span>
        </div>
        <div className="border p-4">
            <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        <OrderItems/>
        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
            <h3 className="font-bold text-xl">총 주문 금액</h3>
            <span className="price text-xl text-indigo-700">{comma(totalPrice)}원</span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="border flex flex-col p-4 gap-4">
            <div className="flex gap-2">
                <input type="checkbox" id="all-agree"
                    ref={allAgreeRef}
                    checked={agreePayment && agreePolicy}
                    onChange={handleAllAgree}

                    />
                <label htmlFor="all-agree" className="text-xl font-bold">
                    전체 동의
                </label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="agree" name="payment-agree"
                    ref={agreePaymentRef}
                    checked={agreePayment} 
                    onChange={handleAgreement}
                />
                <label htmlFor="agree" className="text-sm">
                    구매조건 확인 및 결제 진행 동의
                </label>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" id="policy" name="policy-agree"
                    ref={agreePolicyRef}
                    checked={agreePolicy} 
                    onChange={handleAgreement}
                />
                <label htmlFor="policy" className="text-sm">
                    개인정보 제 3자 제공동의
                </label>
            </div>
            {/* 결제하기 버튼 */}
            <button
                onClick={() => {
                    // POST: /orders/save
                    // DB: 장바구니에 있는 모든 항목이 결제로 저장
                    // 장바구니는 비워짐
                    // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문
                    // /orders/complete/:id

                    if (agreePayment === false || agreePolicy === false) {
                        alert("모든 항목에 동의가 필요합니다.");
                        return;
                    }
                    mutate(
                    //     null, {
                    //     onError:() => {
                    //         alert("주문에 실패했습니다.")
                    //     },
                    //     onSuccess: (res) => {
                    //         const id = res.response.id;
                    //         alert("주문이 완료되었습니다.");
                    //         navigate(`/orders/complete/${id}`);
                    //     }
                    // }
                    );
                }}
                className={`
                    w-full p-4 font-medium    
                ${ agreePayment && agreePolicy 
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-300 text-gray-500" 
                }`}
                >   
                결제하기
            </button>
        </div>
        </div>
    </div>
    );
}

export default OrderTemplate;