import { useMutation } from "react-query";
import { getCart } from "../../apis/cart";
import Loader from "../atoms/Loader";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data?.data?.response;
  const naviagate = useNavigate();
  const [allAgree, setAllagree] = useState(false);
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const allPaymentRef = useRef(null);
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
    } else if (name === "payment-agree") {
      setAgreePolicy(checked);
    }
    if (!checked) {
      setAllagree(false);
    }
  };

  const {} = useMutation({
    queryFn: () => order,
  });

  const OrderItems = () => {
    let renderComponent = [];
    if (Array.isArray(products) === false) return;

    products.forEach((item) => {
      renderComponent.push(
        items.carts.map((cart) => {
          return (
            <div key={cart.id} className="p-4 border-t">
              <div className="product-name font-bold">
                <span> {`${item.productName}-${cart.option.optionName}`} </span>
              </div>
              <div className="quantity">
                <span>{comma(cart.quantity)}개</span>
              </div>
              <div className="price font-bold">
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
          <h1 className="text-sm font-bold"> 주문하기 </h1>
        </div>
        <div className="border p-4">
          <h1 className="text-sm font-bold"> 배송지 정보 </h1>
        </div>
        <div className="border p-4">
          <div className="flex items-center gap-2">
            <span>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
              기본배송지
            </span>
          </div>
        </div>
        <div className="border p-4">
          <span>010-000-0000</span>
        </div>
        <div className="border p-4">
          <span>서울 특별시 강남구 도곡동 000-00</span>
        </div>
        <div className="border p-4">
          <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        {products.map((item) => {
          return (
            <div key={item.id}>
              <div className="product-name">
                <span>{item.name}</span>
                <span>{item.carts[0].optionName}</span>
              </div>
              <div className="quantity">
                <span>{comma(item.quantity)}개</span>
              </div>
              <div className="price">
                <span>{comma(item.price)}원</span>
              </div>
            </div>
          );
        })}
        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl text-indigo-700">총 주문 금액</h3>
          <span className="price">{comma(totalPrice)}원</span>
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
              전체동의
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="agree"
              name="payment-agree"
              ref={agreePaymentRef}
              value={agreePayment}
              onChange={handleAllAgree}
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
            />
            <label htmlFor="agree" className="text-sm">
              개인정보 제3자 제공 동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            onClick={() => {
              if (agreePayment === false || agreePolicy === false) {
                alert("모든 항목에 동의가 필요합니다.");
                return;
              }
              mutate(null, {
                onError: () => {
                  alert("주문에 실패하였습니다.");
                },
                onSuccess: (res) => {
                  const id = res.response.id;
                  alert("주문이 완료되었습니다.");
                  naviagate(`/orders/complete/${id}`);
                },
              });
            }}
            className={`
                  w-full p-4 font-medium 
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
    </div>
  );
};
export default OrderTemplate;
