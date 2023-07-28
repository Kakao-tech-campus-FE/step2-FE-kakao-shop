import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/api/order";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { setUserCookie } from "../../services/cookie";
import logOut from "../../services/logout";

const OrderTemplate = ({ data }) => {
  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;
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
    mutationFn: order,
  });

  const OrderItems = () => {
    return products?.map((item) => {
      return (
        <div key={item.id} className="">
          {item.carts.map((option) => {
            // 수량이 0인 옵션은 표현하지 않는다
            if (option.quantity !== 0) {
              return (
                <div className="flex items-center gap-3" key={option.id}>
                  <img
                    className="w-[60px] h-[60px] border rounded-lg"
                    src={`${process.env.REACT_APP_API_URL}/images/${item.id}.jpg`}
                    alt=""
                  />
                  <div className="product-info">
                    {/* 상품 이름, CSS와 항상 바인딩이 될 필요는 없다. 직관적 이해에 도움을 주도록 사용할 수 있다 */}
                    <div className="product-name-option-quantity">
                      <p>{item.productName}</p>
                      <span>[옵션] {option.option.optionName}, </span>
                      <span>{option.quantity}개</span>
                    </div>
                    <div className="price">
                      <p>{comma(option.price)}원</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    });
  };
  return !!!products ? (
    <div className="text-center">
      <span className="text-4xl">
        주문 데이터를 불러오는 도중 오류가 발생했습니다.
      </span>
    </div>
  ) : (
    <div className="py-10 bg-[#F4F4F4] bg-opacity-70">
      <div className="block mx-auto max-w-[870px] w-full bg-white">
        <div className="border rounded py-4 text-center">
          <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border py-4">
          <h1 className="text-sm font-bold">배송지 정보</h1>
        </div>
        <div className="border py-4">
          <h1 className="flex items-center gap-2">
            홍길동
            <span className="border text-blue-400 bg-blue-100 rounded text-xs p-1">
              기본 배송지
            </span>
          </h1>
        </div>
        <div className="border py-4">
          <span>010-0000-0000</span>
        </div>
        <div className="border py-4">
          <span>서울특별시 강남구 도곡동 000-00</span>
        </div>
        {/* 각 주문의 정보 */}
        <div className="border py-4">
          <h2>주문상품 정보</h2>
        </div>
        <OrderItems />
        {/* 총 주문 금액 */}
        <div className="flex items-center justify-between border p-4">
          <h3>총 주문 금액</h3>
          <span className="price">{comma(totalPrice)}원</span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="border p-4">
          <div className="flex">
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
          <div className="flex">
            <input
              type="checkbox"
              id="agree"
              ref={agreePaymentRef}
              checked={agreePayment}
              name="payment-agree"
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-xl font-bold">
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="policy"
              ref={agreePolicyRef}
              checked={agreePolicy}
              name="policy-agree"
              onChange={handleAgreement}
            />
            <label htmlFor="policy" className="text-xl font-bold">
              개인정보 제 3자 동의
            </label>
          </div>
        </div>
        {/* 결제하기 버튼 */}
        <button
          className={` w-full p-4 font-medium ${
            agreePayment && agreePolicy
              ? "bg-[#feeb00] hover:bg-yellow-300"
              : "bg-neutral-300 text-neutral-500"
          }`}
          onClick={() => {
            if (agreePayment === false || agreePolicy === false) {
              alert("모든 항목에 동의가 필요합니다.");
              return;
            }
            // POST: /orders/save
            // DB: 장바구니에 있는 모든 항목이 결제로 저장
            // 장바구니는 비워짐
            // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
            // /orders/complete/:id
            setUserCookie({
              email: "test@tester.com",
              token: "Bearer sssssss",
            });
            mutate(null, {
              onError: (e) => {
                alert("주문에 실패했습니다. 재로그인 후 다시 시도해 주십시오.");
                logOut();
                navigate("/login");
                // 사용자 정보가 유실(header의 autorization)시
                // /login 페이지로 이동
                // 엉뚱한 상품 데이터가 들어왔을 경우 404 페이지
              },
              onSuccess: (res) => {
                console.log(res);
                const id = res.data.response.id;
                alert("주문이 완료되었습니다.");
                navigate(`/orders/complete/${id}`);
              },
            });
          }}
        >
          <span className="font-bold text-xl">
            {comma(totalPrice)}원 결제하기
          </span>
        </button>
      </div>
    </div>
  );
};
export default OrderTemplate;
