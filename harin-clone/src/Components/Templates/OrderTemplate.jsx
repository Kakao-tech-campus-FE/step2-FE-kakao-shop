import { useMutation } from "@tanstack/react-query";
import { comma } from "../../Utils/convert";
import { order } from "../../Servicies/order";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getCart } from "../../Servicies/cart";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

const OrderTemplate = ({ data }) => {
  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;
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
    mutationKey: "order",
    queryFn: () => order,
  });

  const navigate = useNavigate();

  const OrderItems = () => {
    let renderComponent = [];
    if (products && totalPrice) {
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
                  <span>{comma(cart.price)}원</span>
                </div>
              </div>
            );
          })
        );
      });
    }
    return renderComponent;
  };

  return (
    <div className="py-20">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border p-4">
          <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="borde p-4">
          <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
          <div className="flex items-center gap-2">
            <span>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">기본 배송지</span>
          </div>
        </div>
        <div className="border p-4">
          <span>010-0000-0000</span>
        </div>
        <div className="border p-4">
          <span>부산광역시 금정구 장전동 000-00</span>
        </div>
        <div className="border p-4">
          <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        <OrderItems />
        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl text-indigo-700">{comma(totalPrice ?? 0)}원</span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="flex flex-col p-4">
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
              ref={agreePaymentRef}
              checked={agreePayment}
              name="payment-agree"
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
              ref={agreePolicyRef}
              checked={agreePolicy}
              name="policy-agree"
              onChange={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제 3자 제공 동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            onClick={() => {
              mutate(null, {
                onError: () => {
                  alert("주문에 실패하였습니다.");
                },
                onSuccess: (res) => {
                  const id = res.response.id;
                  alert("주문이 완료되었습니다.");
                  navigate(`/orders/complete/${id}`);
                },
              });
            }}
            className={`w-full p-4 font-medium
             ${agreePayment && agreePolicy ? "bg-yellow-300 text-black" : "bg-stone-300 text-stone-500"}`}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTemplate;
