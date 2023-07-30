import { useMemo } from "react";
import Container from "../atoms/Container";
import comma from "../../utils/convert";
import Box from "../atoms/Box";
import Button from "../atoms/Button";

/** 주문 완료 페이지
 *
 * @param {array} data - 주문 완료 데이터
 * @returns {JSX.Element}
 */
const OrderCompleteTemplate = ({ data }) => {
  const id = useMemo(() => data?.data?.response?.id, [data]);
  const totalPrice = useMemo(() => data?.data?.response?.totalPrice, [data]);

  return (
    <div className="bg-gray-100 mt-[80px] pb-[12px]">
      <Container className="order-complete-template max-w-none mx-auto w-[870px] bg-white">
        <Box className="sub-title h-[80px] py-[24px] border-b border-gray-100 text-[20px] font-bold text-center">
          <h1>구매가 정상적으로 완료되었습니다</h1>
        </Box>
        <div className="h-[12px] bg-gray-100" />

        <Box className="order-data-title py-[20px] pl-[16px] border-y border-gray-100">
          <div className="pb-[16px]">
            <p className="text-[18px] font-bold">주문 정보</p>
          </div>
          <p className="text-[14px]">
            주문번호 <span className="font-semibold">{id}</span>
          </p>
        </Box>
        <div className="h-[12px] bg-gray-100" />

        <Box className="total-receipt px-[16px] py-[20px] border border-gray-100 text-[18px] flex items-center justify-between">
          <h3 className="font-bold">결제 금액</h3>
          <span className="price-change font-bold">{comma(totalPrice)}원</span>
        </Box>
        <Button
          className="w-full p-4 text-[20px] font-bold bg-yellow-kakao text-black"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          쇼핑 계속하기
        </Button>
      </Container>
    </div>
  );
};

export default OrderCompleteTemplate;
