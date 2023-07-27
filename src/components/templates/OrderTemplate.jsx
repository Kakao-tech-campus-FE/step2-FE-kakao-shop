import { useMutation } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
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
    mutationFn: order,
  });

  // products 안에 있는 item
  // `${item.productName}` - `${item.carts[0].option.optionName}`
  // 1`개당 가격: item.carts[0].price + item.carts[0].quantity
  const OrderItems = () => {
    let renderComponent = [];

    // forEach, map은 동기 함수
    products.forEach((item) => {
      // item: 각 상품, carts: 옵션이 담김
      renderComponent.push(
        item.carts.map((cart) => {
          return (
            <div key={cart.id} className="p-4 border-t">
              <div className="product-name">
                <span>
                  {`${item.productName}` + ` ${cart.option.optionName}`}
                </span>
              </div>
              <div className="quantity">
                <span>{comma(cart.quantity)}개</span>
              </div>
              <div className="price">
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
    <div className="py-20">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border p-2">
          <h1 className="text-md font-bold">주문하기</h1>
        </div>
        <div className="border p-4">
          <h2 className="text-md font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
          <div className="flex items-center gap-2">
            <span>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
              기본 배송지
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
        <OrderItems />
        {/* 총 주문 금액  */}
        <div className="border p-4 flex items-center justify-between">
          <h3>총 주문 금액</h3>
          <span className="price text-indigo-600 font-bold">
            {comma(totalPrice)}원
          </span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        {/* 수정 필요 */}
        <div className="border flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              value={agreePayment && agreePolicy}
              onChange={handleAllAgree}
            />
            <label htmlFor="all-agree" className="text-xl font-bold">
              전체 동의
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="agree"
              name="payment-agree"
              ref={agreePaymentRef}
              value={agreePayment}
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-sm">
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="policy"
              name="policy-agree"
              ref={agreePolicyRef}
              value={agreePolicy}
              onChange={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제 3자 제공 동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            onClick={() => {
              // 동의가 이루어지지 않았을 경우 처리
              if (!agreePayment || !agreePolicy) {
                alert("모든 항목에 동의가 필요합니다.");
                return;
              }

              // POST: /orders/save
              // DB: 장바구니에 있는 모든 항목이 결제로 저장
              // 장바구니는 비워짐
              // 페이지 이동 -> 주문완료 페이지
              // (리턴 받은 주문 아이디를 같이 전달해서) /orders/complete/:id

              // 여기 수정!
              mutate(null, {
                onError: (err) => {
                  alert("주문 실패");
                },
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  alert("주문 성공");
                  navigate(`/orders/complete/${id}`);
                },
              });
            }}
            className={
              `w-full p-4 font-medium ${
              agreePayment && agreePolicy
                ? "bg-yellow-500"
                : "bg-gray-300"}`
            }
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTemplate;
