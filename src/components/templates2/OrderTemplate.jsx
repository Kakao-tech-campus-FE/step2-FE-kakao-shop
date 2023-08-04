import { useMutation, useQuery } from "@tanstack/react-query"; // eslint-disable-line no-unused-vars
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getCart } from "../../services/cart"; // eslint-disable-line no-unused-vars
import { useSelector } from "react-redux"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom"; // eslint-disable-line no-unused-vars

const OrderTemplate = () => {
  const { data } = useQuery(["cart"], getCart, { suspense: true });
  const { products, totalPrice } = data?.data?.response ?? {};
  const navigate = useNavigate();
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

    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const { mutate } = useMutation({
    // mutationKey: "order",
    // queryFn: () => order // Pass the required data to the order function
    mutationFn: order,
  });

  const OrderItem = () => {
    let renderComponent = [];

    products.forEach((item) => {
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
                <span>{comma(totalPrice)}원</span>
              </div>
            </div>
          );
        })
      );
    });

    return renderComponent;
  };

  return (
    <Container className="py-20">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border p-4">
          <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border p-4">
          <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
          <div className="text-sm gap-2">
            홍길동
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
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
        <OrderItem />

        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl text-indigo-700">
            {comma(totalPrice)}원
          </span>
        </div>

        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="border flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
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
              checked={agreePayment}
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
              checked={agreePolicy}
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-sm">
              개인정보 제 3자 제공동의
            </label>
          </div>

          {/* 결제하기 버튼 */}
          <button
            onClick={() => {
              // POST: /orders/save
              // DB: 장바구니에 있는 모든 항목이 결제로 저장
              // 장바구니는 비워짐
              // 페이지 이동 -> 주문완료 페이지
              // /orders/complete/:id

              // 동의가 이뤄지지 않았을 경우 처리
              if (agreePayment === false || agreePolicy === false) {
                alert("모든 항목에 동의가 필요합니다.");
                return;
              }

              mutate(
                {},
                {
                  onError: () => {
                    console.log(); // eslint-disable-line no-unused-vars
                    alert("주문에 실패했습니다.");
                  },
                  onSuccess: (res) => {
                    const id = res.data.response.id; // 이 부분에서 문제 생김!
                    alert("주문이 완료되었습니다.");
                    navigate(`/orders/complete/${id}`);
                  },
                }
              );
            }}
            className={`
              w-full p-4 font font-medium
              ${
                agreePayment && agreePolicy
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-300 text-gray-500"
              }`}
          >
            결제하기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OrderTemplate;