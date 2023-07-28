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
import { simpleAlert } from "../../utils/swal";

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

  const handleOnOrder = () => {
    return () => {
      // 동의가 이뤄지지 않았을 경우 처리
      if (agreePayment === false || agreePolicy === false) {
        simpleAlert("카카오페이 구매조건(결제조건) 확인 동의를 체크해 주세요.");
        return;
      }

      mutate(null, {
        onError: (error) => {
          // 인증정보 오류 발생 시 재로그인
          if (error.response.status === 401)
            simpleAlert("로그인이 만료되었습니다. 다시 로그인해 주세요.");
          navigate("/login");
          simpleAlert(error.response.data.errorMessage);
        },
        onSuccess: (res) => {
          console.log(res.data.response.id);
          const { id } = res.data.response;
          simpleAlert("주문이 완료되었습니다.");
          navigate(`/orders/${id}`, { replace: true });
        },
      });
    };
  };

  return (
    <Container className="order">
      <div className="title text-center font-bold py-4 border border-solid border-gray-200 bg-white">
        <h1>주문하기</h1>
      </div>
      <ShippingAddress />

      <FoldingBox title="주문상품 정보" sub={`(총 ${products?.length}개)`}>
        {products && <OrderItems products={products} />}
      </FoldingBox>

      {/* 총 주문금액 */}
      <Box>
        <h2 className="text-lg font-bold">결제정보</h2>
        <div className="my-4">
          <Divider />
        </div>
        <div className="text-sm">
          <div className="flex justify-between">
            <span>상품금액 ({products?.length}개)</span>
            <span>{comma(totalPrice)}원</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>배송비</span>
            <span>0원</span>
          </div>
        </div>
        <div className="my-4">
          <Divider />
        </div>
        <div className="flex justify-between text-lg">
          <span>총 주문 금액</span>
          <span className="font-extrabold">{comma(totalPrice)}원</span>
        </div>
      </Box>

      {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
      <Box className="flex flex-col gap-4 p-4 mb-0">
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
            카카오페이 결제조건 및 개인정보 제3자 제공 동의
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

      <div className="bg-slate-50 border border-solid border-x-gray-200 border-y-0 p-4">
        <span className="text-sm text-gray-800 font-bold">법적고지</span>
        <p className="text-sm text-gray-500 whitespace-pre-wrap">
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
          포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
          통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및
          환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </p>
      </div>
      {/* 결제하기 버튼 */}
      <Button
        onClick={handleOnOrder()}
        color={agreePayment && agreePolicy ? "kakao" : "gray"}
        className="rounded-none"
      >
        {comma(totalPrice)}원 결제하기
      </Button>
    </Container>
  );
};

export default OrderTemplate;
