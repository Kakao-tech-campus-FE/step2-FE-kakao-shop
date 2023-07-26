import { useMutation } from "@tanstack/react-query";
import { order } from "../../apis/order";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";
import OrderList from "../moleclules/OrderList";
import useCheckBox from "../../hooks/useCheckBox";
import CheckBox from "../atoms/CheckBox";
import { useState } from "react";

const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();

  const { products, totalPrice } = data.data.response;

  const { checkedOptions, handleOnChangeCheck, handleOnChangeCheckAll } =
    useCheckBox([], ["order", "policy"]);

  const [selectedReq, setSelectedReq] = useState("");
  const [orderRequest, setOrderRequest] = useState("");

  const { mutate } = useMutation({
    mutationKEy: "order",
    queryFn: order,
  });

  const handleOnChangeSelect = (e) => {
    if (e.target.value === "직접입력") {
      setOrderRequest("");
    } else {
      setOrderRequest(e.target.value);
    }
    setSelectedReq(e.target.value);
  };

  const handleOnChangeRequest = (e) => {
    setOrderRequest(e.target.value);
  };

  return (
    <div className="bg-[#f4f4f4]">
      <Container className="max-w-[870px] px-0 pb-5">
        <div className="border-b border-gray-200 bg-white leading-[44px]">
          <h1 className="text-center text-[15px] font-bold">주문하기</h1>
        </div>
        <button className="w-full bg-white px-4 py-3 text-start text-lg font-bold">
          배송지 정보
        </button>
        <div className="flex flex-col gap-2 bg-white px-4 py-3">
          <div className="flex gap-2">
            <span className="text-lg font-bold">조준서</span>
            <span className="rounded-xl bg-[#f3f4f9] px-2 pt-[7px] text-xs text-blue-500">
              기본 배송지
            </span>
          </div>
          <p className="text-sm">010-6201-3110</p>
          <div>
            {" "}
            <p className="text-sm text-gray-500">
              (46287) 부산 금정구 금강로279번길 60
            </p>
            <p className="text-sm text-gray-500">(장전동, 금조재) 503호</p>
          </div>
          <div className="flex flex-col gap-3">
            <select
              value={selectedReq}
              className="rounded-md border border-gray-200 p-2 text-sm"
              onChange={handleOnChangeSelect}
            >
              <option defaultValue={true} disabled={true}>
                배송 요청사항을 선택해주세요
              </option>
              <option>배송전 연락바랍니다.</option>
              <option>부재시 경비실에 맡겨주세요.</option>
              <option>부재시 연락주세요.</option>
              <option>직접입력</option>
            </select>
            <textarea
              className="app rounded-md border border-gray-300 px-3 py-2 text-sm"
              name=""
              id=""
              placeholder="배송시 요청사항을 입력해주세요 (최대 50자)"
              value={orderRequest}
              onChange={handleOnChangeRequest}
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button className="mt-3 w-full border-b bg-white px-4 py-3 text-start text-lg font-bold">
          주문상품 정보
        </button>
        <div>
          {products.map((item) =>
            item.carts.reduce((acc, cur) => acc + cur.quantity, 0) ? (
              <OrderList item={item} key={item.id} />
            ) : null
          )}
        </div>
        <div className="bg-white">
          <h3 className="border-b border-gray-200 p-4 text-lg font-bold">
            결제정보
          </h3>
          <div className="mb-2 flex justify-between p-4">
            <span className="text-lg font-[400]">최종 결제금액</span>
            <span className="font-bold">{comma(totalPrice)}원</span>
          </div>
        </div>
        <div className="flex flex-col border-b border-gray-200 bg-white">
          <CheckBox
            labelClassName="p-4 text-lg font-bold flex items-center gap-1 border-b border-gray-200"
            onChange={handleOnChangeCheckAll}
            checked={checkedOptions.length === 2}
          >
            전체 동의하기
          </CheckBox>
          <CheckBox
            labelClassName="px-4 py-3 mt-1 flex items-center text-sm"
            value={"order"}
            onChange={handleOnChangeCheck}
            checked={checkedOptions.includes("order")}
          >
            구매조건 확인 및 결제 진행 동의
          </CheckBox>
          <CheckBox
            labelClassName="px-4 py-3 flex items-center text-sm"
            value={"policy"}
            onChange={handleOnChangeCheck}
            checked={checkedOptions.includes("policy")}
          >
            개인정보 제3자 제공 동의
          </CheckBox>
        </div>
        <div className="bg-[#fafafa] p-4">
          <p className="mb-1 text-[13px] font-bold">법적고지</p>
          <p className="text-[13px] text-[#666]">
            (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
            포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
            통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
            및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p>
        </div>
        {/* 결제하기 버튼 */}
        <button
          className="w-full bg-kakao p-4 text-xl font-bold text-[#333]"
          onClick={() => {
            // POST: /orders/save
            // DB: 장바구니 모든 항목 결제로 저장
            // 장바구니 비워짐
            // 페이지 이동 -> 주문완료 페이지
            // /orders/complete/:id
            mutate(null, {
              onError: () => {
                // 주문 실패
              },
              onSuccess: (res) => {
                const id = res.response.id;
                navigate(`/orders/complete/${id}`);
              },
            });
          }}
        >
          {comma(totalPrice)}원 결제하기
        </button>
      </Container>
    </div>
  );
};

export default OrderTemplate;
