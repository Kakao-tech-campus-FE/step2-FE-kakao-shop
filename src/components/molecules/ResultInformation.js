import { useSelector } from "react-redux";

import { convertToPrice } from "utils/convert.js";

export default function ResultInformation({ data }) {
  const email = useSelector((state) => state.user.email);

  return (
    <div className="space-y-2 text-left">
      <div className="bg-white border text-left">
        <p className="p-3 mb-2 border-b text-lg font-bold">배송지 정보</p>
        <div className="p-3">
          <p className="mb-1 space-x-2">
            <span className="font-bold">
              {/[^@]*/.exec(email).toString().toUpperCase()}
            </span>
            <span>010-1234-5678</span>
          </p>
          <p className="mb-1 text-sm">
            (12345) 광주광역시 북구 전남대로 6번길 7-8
          </p>
          <p className="mb-2 text-sm text-gray-500">
            [요청사항] 부재 시 경비실에 맡겨주세요.
          </p>
        </div>
      </div>
      <div className="bg-white border">
        <p className="p-3 border-b text-lg font-bold">주문상품 정보</p>
        {data.products.map((product) =>
          product.items.map((item) => (
            <div key={item.id} className="p-3 border-b">
              <p className="text-sm font-bold">{product.productName}</p>
              <p className="text-sm">
                [옵션] {item.optionName}, {item.quantity}개
              </p>
              <p className="font-bold">{convertToPrice(item.price)}</p>
            </div>
          ))
        )}
      </div>
      <div className="bg-white border">
        <div className="flex justify-between p-3">
          <span className="text-lg font-bold">결제금액</span>
          <span className="text-lg text-blue-500 font-bold">
            {convertToPrice(data.totalPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
