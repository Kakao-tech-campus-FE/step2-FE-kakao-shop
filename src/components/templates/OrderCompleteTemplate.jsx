/*eslint-disable react/prop-types */

import styled from "styled-components";
import OptionItem from "../atoms/OptionItem";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductList = styled.div`
  padding: 1rem;
  .label {
    font-size: 0.8rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;
const productItems = (products) => {
  return products.map((product) => {
    return (
      <div className="flex flex-col gap-2 mb-4" key={product.id}>
        <div className="font-bold text-sm">상품명</div>
        <p className="text-lg text-gray-400">{product.productName}</p>
        <OptionItem items={product.items} />
      </div>
    );
  });
};

const OrderCompleteTemplate = ({ data }) => {
  const navigate = useNavigate();
  const orderdata = data?.data;

  if (!orderdata) {
    return <></>;
  }

  /* 
return
|_section
  |_div
  | |_h1 (구매 완료)
  | |_h2 (구매가 정상적으로 완료됨)
  |_div
  | |_div(주문상품 정보)
  | |_div
  | | |_productItems(div)
  | | | |_div(상품명)
  | | | |_p(받아온 실제 상품명)
  | | | |_OptionItem(옵션, 구매수량, 금액등의 정보)
  |_div
  |_div
  | |_span(일반 결제 금액)
  | |_span(totalPrice 금액)
  |_button(쇼핑 계속하기 버튼)


*/

  return (
    <section className="py-10 my-10 mx-auto max-w-[500px] w-full">
      <div className="text-center py-10">
        <h1 className=" text-xl font-bold"> 구매완료!</h1>
        <h2 className="text-lg">구매가 정상적으로 완료됐습니다.</h2>
      </div>
      <div className="border mb-4">
        <div className="text-sm border-b p-4 border-gray-200 text-center font-bold">
          주문상품 정보
        </div>
        <ProductList>
          {productItems(orderdata.response.products)}
          <div className="font-bold text-lg">총 금액</div>
          <p className="text-xl">{comma(orderdata.response.totalPrice)}원</p>
        </ProductList>
      </div>
      <div className="border">
        <div className="flex justify-between p-4">
          <span className="font-bold text-xl"> 일반 결제 금액</span>
          <span className="text-indigo-500 font-bold text-xl">
            {comma(orderdata.response.totalPrice)}원
          </span>
        </div>
        <button
          className="w-full py-4 text-black font-bold text-xl bg-yellow-400 "
          onClick={() => {
            navigate(staticServerUrl + "/");
          }}
        >
          쇼핑 계속하기
        </button>
      </div>
    </section>
  );
};

export default OrderCompleteTemplate;
