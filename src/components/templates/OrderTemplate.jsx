import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../apis/order";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderTemplate = ({ data }) => {
  const totalPrice = data?.data?.response.totalPrice;
  const navigate = useNavigate();

  const [allAgree, setAllAgree] = useState(false);
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAllAgree(value);
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

    if (!checked) {
      setAllAgree(false);
    } else if (
      agreePaymentRef.current.checked &&
      agreePolicyRef.current.checked
    ) {
      setAllAgree(true);
    }
  };

  const { mutate } = useMutation({
    mutationKey: "order",
    mutationFn: order,
  });

  const OrderItems = useCallback(({ data }) => {
    const renderComponent = [];

    data?.data?.response.products.forEach((item) => {
      const filteredCarts = item.carts.filter((cart) => cart.quantity > 0);
      renderComponent.push(
        filteredCarts.map((cart) => {
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

    return renderComponent;
  }, []);

  return (
    <div className="py-20 text-black">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border p-2">
          <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border p-4">
          <h1 className="text-sm font-bold">배송지 정보</h1>
        </div>
        <div className="border p-4">
          <div className="flex items-center gap-4">
            <span>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-sm p-1">
              기본배송지
            </span>
          </div>
        </div>
        <div className="border p-4">
          <span>010-0000-0000</span>
        </div>
        <div className="border p-4">
          <span>서울시 강남구 도곡동 000-00</span>
        </div>
        <div className="border p-4">
          <h2>주문상품 정보</h2>
        </div>
        <OrderItems data={data} />
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl font-bold text-blue-600">
            {comma(totalPrice)}원
          </span>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              checked={allAgree}
              onChange={handleAllAgree}
            />
            <label htmlFor="all-agree" className="text-lg font-bold">
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
            <label htmlFor="policy" className="text-sm">
              개인정보 제 3자 제공동의
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            if (allAgree === false) {
              alert("모든 항목에 동의가 필요합니다.");
              return;
            }
            mutate(null, {
              onError: (error) => {
                // 주문 시 에러 처리
                alert("주문에 실패했습니다.");
              },
              onSuccess: (response) => {
                const id = response?.data?.response.id;
                alert("주문이 완료되었습니다.");
                navigate(staticServerUri + `/orders/complete/${id}`);
              },
            });
          }}
          className={`
            w-full p-4 font-medium
            ${
              allAgree
                ? "bg-yellow-300 text-black"
                : "bg-gray-300 text-gray-500"
            }`}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default OrderTemplate;
