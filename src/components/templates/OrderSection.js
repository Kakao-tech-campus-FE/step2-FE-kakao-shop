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
      {error && <span>Error</span>}
      {data && (
        <div className=" bg-gray-100">
          <div className="inline-block w-[800px] mx-auto mt-4 mb-16">
            <h1 className="block py-2 bg-white border text-sm font-bold">주문하기</h1>
            <OrderInformation data={data.data.response} />
            <div className="bg-white mt-2 border text-left">
              <div className="p-3 border-b space-x-2">
                <input id="agreeAll" type="checkbox" />
                <label htmlFor="agreeAll" className="text-lg font-bold">
                  전체 동의하기
                </label>
              </div>
              <div className="p-3 border-b">
                <input id="agreeBuy" type="checkbox" />
                <label htmlFor="agreeBuy">
                  {" "}
                  구매조건 확인 및 결제 진행 동의
                </label>
                <br />
                <input id="agreeAccount" type="checkbox" />
                <label htmlFor="agreeAccount"> 개인정보 제3자 제공 동의</label>
              </div>
              <div className="p-3 bg-gray-50 border-b space-y-1 text-xs">
                <span className="font-bold">법적 고지</span>
                <p className="text-gray-500">
                  판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어
                  있습니다. 개별 판매자가 판매하는 상품에 대해 본 사업자는
                  통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문,
                  배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                </p>
              </div>
              <button className="block w-full p-3 bg-yellow-300 text-xl font-bold">
                {convertToPrice(data.data.response.totalPrice)} 결제하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
