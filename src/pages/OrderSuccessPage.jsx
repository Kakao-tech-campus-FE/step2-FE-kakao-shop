import { useNavigate, useSearchParams } from "react-router-dom";
import Box from "../components/atoms/Box";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import Button from "../components/atoms/Button";
import { comma } from "../utils/convert";

export default function OrderSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className="bg-bg_gray">
      <Suspense fallback={<Loader />}>
        <div className="w-[870px] mx-auto my-0">
          <div className="py-8">
            <span className="block text-[36px] text-center">
              구매완료!
            </span>
            <span>{`${searchParams.get("orderId")}님!`}</span>
            <br />
            <span>
              구매가 정상적으로 완료되었습니다.
            </span>
          </div>
          <Box className="title_wrap text-center leading-[44px] bg-white border border-border_gray border-b-0">
              <h1 className="font-semibold">주문상품 정보</h1>
          </Box>
          <Box className="bg-white border border-border_gray">
            <h2 className="inline-block">상품명</h2>
            <span></span>
            <br />
            <h2 className="inline-block">주문번호</h2>
            <span></span>
            <br />
            <h2 className="inline-block">옵션</h2>
            <span></span>
            <br />
          </Box>

          <Box className="bg-white border border-border_gray mt-3">
            <div>
              <span className="float-left text-[18px] font-semibold leading-[21px] p-5 pr-[24px] pl-[16px]">
                일반 결제 금액
              </span>
              <span className="block text-right text-[18px] font-semibold leading-[19px] text-blue p-5 pl-0">
                {`${Number(
                  searchParams.get("amount")
                ).toLocaleString()}원`}
              </span>
            </div>
            <Button onClick={() => {
              navigate("/");
            }}>
              <strong>쇼핑 계속하기</strong>
            </Button>
          </Box>
        </div>
      </Suspense>
    </div>
  );
}