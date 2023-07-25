import { useMutation } from "react-query";
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

  const { mutate } = useMutation({
    mutationKey: "order",
    queryFn: () => order,
  });

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

  const OrderItems = () => {
    let renderComponent = [];
    if (!Array.isArray(products)) return;

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
    <div className="container">
      {console.log("TemplateData: ", data)}
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border py-2">
          <h1 className="text-sm font-bold">주문 확인</h1>
        </div>
        <div className="border py-4">
          <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border py-4">
          <div className="name flex items-center gap-2">
            <span>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
              기본배송지
            </span>
          </div>
        </div>
        <div className="border py-4">전화번호</div>
        <div className="border py-4">주소</div>
        <div className="border py-4">
          <h2>주문상품 정보</h2>
        </div>
        <OrderItems />

        {/* 총 주문금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl text-indigo-700">
            {comma(totalPrice)}원
          </span>
        </div>
        {/* 전체 동의 */}
        <div className="flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              checked={agreePayment === true && agreePolicy === true}
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
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제공 제 3자 동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            // className={`
            //   ${bg-yellow-500 w-full p-4 font-medium}
            // `}
            onClick={() => {
              // 동의가 이루어지지 않았을 경우 버튼 액션 막기
              if (agreePayment === false || agreePolicy === false) {
              }

              // POST orders/save
              // 장바구니에 있는 모든 항목이 결제로 저장
              // 장바구니는 비워짐
              // 페이지 이동 > 주문완료 페이지(리턴 받은 주문 아이디를 전달)
              // orders/complete/:id
              mutate(null, {
                onSuccess: (res) => {
                  const id = res.id;
                  navigate(`/orders/complete/${id}`);
                },
                onError: () => {},
              });
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTemplate;
