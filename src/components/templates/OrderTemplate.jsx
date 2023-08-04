import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import OrderItems from "../organisms/OrderItems";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderTemplate = ({ data }) => {
	
  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const { mutate } = useMutation({
    mutationFn: order,
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

  return (
    <div className="container">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border py-2">
          <h1 className="text-sm font-bold mx-2">주문 확인</h1>
        </div>
        <div className="border py-4">
          <h2 className="text-sm font-bold mx-2">배송지 정보</h2>
        </div>
        <div className="border py-4">
          <div className="name flex items-center gap-2 mx-2">
            전도균
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
              기본배송지
            </span>
          </div>
        </div>
        <div className="border py-4">
          <div className="mx-2">
            전화번호 <span>010-1234-5678</span>
          </div>
        </div>
        <div className="border py-4">
          <div className="mx-2">
            주소 <span>광주광역시 북구 전남대학교</span>
          </div>
        </div>
        <div className="border py-4">
          <span className="mx-2">주문상품 정보</span>
        </div>
        <OrderItems products={products} />

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
              onClick={handleAllAgree}
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
              onClick={handleAgreement}
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
              onClick={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제공 제 3자 동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            className="bg-yellow-300 w-full p-2 font-medium"
            onClick={() => {
              if (agreePayment === false || agreePolicy === false) {
                alert("필수 동의에 체크해주세요. ");
                return;
              }

              mutate(null, {
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  navigate(staticServerUri + `/orders/${id}`);
                },
                onError: (err) => {
                  const errorMessage = err.response.data.error.message;
                  const status = err.response.status;
                  // 장바구니에 아무것도 없을 땐, 알림창만 띄우도록
                  if (
                    errorMessage === "장바구니에 아무 내역도 존재하지 않습니다"
                  ) {
                    alert(errorMessage);
                    return;
                  } // 인증이 되지 않았을 경우(로그인 정보가 없을 때, token 만료), 알림창 이후 로그인 화면으로 돌아가도록
                  else if (errorMessage === "인증되지 않았습니다") {
                    navigate(staticServerUri + "/login");
                    return;
                  }
                  /**
                   * 그 외 에러 캐칭 시 에러 페이지로 이동
                   * ex) 없는 상품, 잔액 부족, 결제 실패 등
                   * @status - 에러 status 코드(401, 403, 404, ...)
                   * @errorMessage - 백엔드 API에서 가져오는 Error Message
                   */
                  navigate(staticServerUri + `/error/${status}/${errorMessage}`);
                },
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
