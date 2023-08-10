import Box from "../atoms/Box";
import Container from "../atoms/Container";
import Divider from "../atoms/Divider";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { comma } from "../../utils/convert";

const OrderCompleteTemplate = ({ data }) => {
  return (
    <Container>
      <Box className="title text-center py-10 bg-white">
        <BsFillCheckCircleFill className="mx-auto text-kakao-blue" size="40" />
        <h1 className="text-3xl font-bold my-4">
          <span className="text-kakao-blue">구매가 정상적으로 완료</span>
          되었습니다
        </h1>
        <span className="text-sm">
          주문/배송내역 확인은 마이페이지의 "주문/배송정보"에서 하실 수
          있습니다.
        </span>
      </Box>
      <Box>
        <h2 className="text-lg font-bold">주문정보</h2>
        <div className="my-4">
          <Divider />
        </div>
        <div className="text-sm">
          <div className="grid grid-flow-row-dense grid-cols-6 gap-2">
            <span className="text-kakao-blue font-bold col-span-1">
              주문번호
            </span>
            <span className="col-span-5">{data?.id}</span>
            <span className="text-kakao-blue font-bold col-span-1">
              주문상품
            </span>
            <span className="col-span-5">
              <span className="font-bold">{data?.products[0].productName}</span>
              {data?.products.length > 1 &&
                ` 외 ${data?.products.length - 1}건`}
            </span>
          </div>
        </div>
      </Box>
      <Box className="flex justify-between text-lg">
        <span className="font-bold">결제금액</span>
        <span className="font-extrabold text-kakao-blue">
          {comma(data?.totalPrice)}원
        </span>
      </Box>
    </Container>
  );
};

export default OrderCompleteTemplate;
