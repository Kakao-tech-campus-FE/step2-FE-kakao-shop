import { useQuery } from "@tanstack/react-query";
import { getCartReq } from "apis/cart";

import Loader from "components/atoms/Loader";

import OrderInformation from "components/molecules/OrderInformation";
import { convertToPrice } from "utils/convert";

export default function OrderSection() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["carts"],
    queryFn: getCartReq,
  });
  return (
    <>
      {isLoading && <Loader />}
      {error && <h1 children="ERROR" />}
      {data && (
        <>
          <OrderInformation data={data.data.response} />
          <div>
            <div>
              <input id="agreeAll" type="checkbox" />
              <label htmlFor="agreeAll">전체 동의하기</label>
            </div>
            <div>
              <input id="agreeBuy" type="checkbox" />
              <label htmlFor="agreeBuy">구매조건 확인 및 결제 진행 동의</label>
              <input id="agreeAccount" type="checkbox" />
              <label htmlFor="agreeAccount">개인정보 제3자 제공 동의</label>
            </div>
            <div>
              <span>법적 고지</span>
              <p>
                판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어
                있습니다. 개별 판매자가 판매하는 상품에 대해 본 사업자는
                통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문,
                배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
              </p>
            </div>
            <button>{convertToPrice(data.data.response.totalPrice)} 결제하기</button>
          </div>
        </>
      )}
    </>
  );
}
