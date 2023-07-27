import { useMutation } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { saveOrder } from "../../apis/order";
import Container from "../atoms/Container";
import ShippingAddress from "../molecules/ShippingAddress";
import Box from "../atoms/Box";
import FoldingBox from "../atoms/FoldingBox";
import Divider from "../atoms/Divider";
import Button from "../atoms/Button";
import OrderItems from "../atoms/OrderItems";

const OrderTemplate = ({ data }) => {
  // 사용자의 장바구니 목록을 조회해서 보여주는 것
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
    console.log(products?.length);
    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["order"],
    mutationFn: saveOrder,
  });

  return (
    <Container className="order">
      <div className="title text-center font-bold py-4 border border-solid border-gray-200 bg-white">
        <h1>주문하기</h1>
      </div>
      <div className="mx-auto block w-[100%] max-w-[1024px]">
        <ShippingAddress />

        <FoldingBox title="주문상품 정보" sub={`(총 ${products?.length}개)`}>
          {products && <OrderItems products={products} />}
        </FoldingBox>

        {/* 총 주문금액 */}
        <div className="flex items-center justify-between border p-4">
          <h3 className="text-lx font-bold">총 주문 금액</h3>
          <span className="price text-xl text-kakao_blue">
            {comma(totalPrice)}원
          </span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <Box className="flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="all-agree"
              name="all-agree"
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
              className="w-5 h-5 text-kakao-yellow border-gray-300 rounded-sm focus:ring-kakao-yellow"
            />
            <label htmlFor="all-agree" className="text-lg font-bold">
              전체 동의하기
            </label>
          </div>
          <Divider />
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="agree"
              name="payment-agree"
              ref={agreePaymentRef}
              checked={agreePayment}
              onChange={handleAgreement}
              className="w-5 h-5 text-kakao-yellow border-gray-300 rounded-sm focus:ring-kakao-yellow"
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
              className="w-5 h-5 text-kakao-yellow border-gray-300 rounded-sm focus:ring-kakao-yellow"
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제3자 제공 동의
            </label>
          </div>
        </Box>

        {/* 결제하기 버튼 */}
        <Button
          onClick={() => {
            // 동의가 이뤄지지 않았을 경우 처리
            if (agreePayment === false || agreePolicy === false) {
              alert("동의가 이뤄지지 않았습니다.");
              return;
            }
            // POST: /orders/save
            // DB: 장바구니에 있는 모든 항목이 결제로 저장
            // 장바구니는 비워짐
            // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
            // /orders/complete/:id

            mutate(null, {
              onError: (error) => {
                // console.log(error);
                // alert("주문에 실패하였습니다.");
                // 사용자 정보가 유실(headers.Authorization) -> /login
                // 서버사이드 에러 -> alert
                // 엉뚱한 product 정보 -> 404 페이지
              },
              onSuccess: (res) => {
                console.log(res.data.response.id);
                const { id } = res.data.response;
                alert("주문이 완료되었습니다.");
                navigate(`/orders/${id}`);
              },
            });
          }}
          color={agreePayment && agreePolicy ? "kakao" : "gray"}
        >
          결제하기
        </Button>
      </div>
    </Container>
  );
};

export default OrderTemplate;
