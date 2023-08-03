import { useMutation, useQuery } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCart } from "../../services/cart";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderTemplate = () => {
  const { data } = useQuery(["cart"], getCart, { suspense: true });
  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const { name, value } = e.target;

    if (name === "payment-agree") {
      setAgreePayment(value);
    } else if (name === "policy-agree") {
      setAgreePolicy(value);
    }
  };

    /**
   * 결제 실패 에러 캐칭 시나리오
   * 실제 결제가 이루어지지 않으므로 세 가지 경우에 대해 에러를 처리한다.
   * 1. 401 에러
   *    로그인 정보가 없어 헤더에 authorization이 없는 경우 401 에러를 처리하여 로그인 페이지로 이동한다.
   * 2. 404 에러
   *    페이지를 찾을 수 없는 경우, NotFoundPage(404)로 이동한다.
   * 3. 서버 에러 
   *    서버 요청 실패의 경우 alert창을 띄운다.
   */
	

	
	
	
	
	
	
	

  const { mutate } = useMutation({
    mutationFn: order,
    onError: (error) => {
      if (error.response && error.response.status === 401) {
        alert("로그인 정보가 없습니다. 로그인 페이지로 이동합니다.");
        navigate(staticServerUri + "/login");
      } else if (error.response && error.response.status === 404) {
        alert("페이지를 찾을 수 없습니다. 404 페이지로 이동합니다.");
        navigate(staticServerUri + "/*");
      } else {
        alert("주문에 실패했습니다. 다시 시도해주세요.");
      }
    },
  });

  const OrderItems = () => {
    return products.flatMap((item) =>
      item.carts.map((cart) => (
        <div key={cart.id} className="p-4 border-t">
          <div className="product-name">
            <span>
              {`${item.productName} ${cart.option.optionName}`}
            </span>
          </div>
          <div className="quantity">
            <span>{comma(cart.quantity)}개</span>
          </div>
          <div className="price">
            <span>{comma(cart.price * cart.quantity)}원</span>
          </div>
        </div>
      ))
    );
  };

  return (
    <div className="py-8">
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
  
        <OrderItems />
        <div className="border p-4 flex items-center justify-between">
          <h3>총 주문 금액</h3>
          <span className="price text-indigo-600 font-bold">
            {comma(totalPrice)}원
          </span>
        </div>
        <div className="border flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
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
              checked={agreePolicy}
              onChange={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제 3자 제공 동의
            </label>
          </div>
          <button
            onClick={() => {
              if (!agreePayment || !agreePolicy) {
                alert("모든 항목에 동의해야합니다.");
                return;
              }

              mutate(null, {
                onError: (err) => {
                  console.error(err);
                  alert("결제 실패");
                },
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  navigate(staticServerUri + `/orders/complete/${id}`);
                },
              });
            }}
            className={`w-full p-4 font-medium ${
              agreePayment && agreePolicy ? "bg-yellow-300" : "bg-gray-300"
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