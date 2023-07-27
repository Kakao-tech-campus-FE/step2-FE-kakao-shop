import { useMutation, useQuery } from "@tanstack/react-query";
import { getCartReq } from "apis/cart";
import { orderReq } from "apis/order";

import Loader from "components/atoms/Loader";

import OrderInformation from "components/molecules/OrderInformation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { convertToPrice } from "utils/convert";

export default function OrderSection() {
  const navigate = useNavigate();
  const [agreement, setAgreement] = useState({
    agreeBuy: false,
    agreeAccount: false,
  });
  const { isLoading, error, data } = useQuery({
    queryKey: ["carts"],
    queryFn: getCartReq,
    onSuccess: (res) => {
      if (res.data.response.totalPrice !== 0) return;
      alert("장바구니가 비어있습니다. 메인 페이지로 돌아갑니다.");
      navigate("/");
    },
  });
  const { mutate } = useMutation({ mutationFn: orderReq });

  const handleCheckChange = (e) => {
    const { id } = e.target;
    switch (id) {
      case "agreeAll":
        setAgreement((prevAgree) => ({
          agreeBuy: !(prevAgree.agreeBuy && prevAgree.agreeAccount),
          agreeAccount: !(prevAgree.agreeBuy && prevAgree.agreeAccount),
        }));
        break;
      case "agreeBuy":
      case "agreeAccount":
        setAgreement((prevAgree) => ({ ...prevAgree, [id]: !prevAgree[id] }));
        break;
      default:
        console.log("체크박스 오류 발생");
    }
  };

  const handleButtonClick = () => {
    if (!agreement.agreeBuy)
      alert("결제진행을 위한 구매조건 확인 동의를 체크해주세요.");
    else if (!agreement.agreeAccount)
      alert("상품배송을 위한 개인정보 제3자 제공 동의를 체크해주세요.");
    else
      mutate(null, {
        onSuccess: (res) => {
          navigate(`/result/${res.data.response.id}`);
        },
        onError: (err) => {
          console.dir(err);
        },
      });
  };

  return (
    <>
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      {error && <span>Error</span>}
      {data && (
        <div className="flex-grow bg-gray-100">
          <div className="inline-block w-[800px] mx-auto mt-4 mb-16">
            <h1 className="block py-2 bg-white border text-sm font-bold">
              주문하기
            </h1>
            <OrderInformation data={data.data.response} />
            <div className="bg-white mt-2 border text-left">
              <div className="p-3 border-b space-x-2">
                <input
                  id="agreeAll"
                  type="checkbox"
                  checked={agreement.agreeBuy && agreement.agreeAccount}
                  onChange={handleCheckChange}
                />
                <label
                  htmlFor="agreeAll"
                  className="text-lg font-bold select-none"
                >
                  전체 동의하기
                </label>
              </div>
              <div className="p-3 border-b">
                <input
                  id="agreeBuy"
                  type="checkbox"
                  checked={agreement.agreeBuy}
                  onChange={handleCheckChange}
                />
                <label htmlFor="agreeBuy" className="select-none">
                  {" "}
                  구매조건 확인 및 결제 진행 동의
                </label>
                <br />
                <input
                  id="agreeAccount"
                  type="checkbox"
                  checked={agreement.agreeAccount}
                  onChange={handleCheckChange}
                />
                <label htmlFor="agreeAccount" className="select-none">
                  {" "}
                  개인정보 제3자 제공 동의
                </label>
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
              <button
                className="block w-full p-3 bg-yellow-300 text-xl font-bold"
                onClick={handleButtonClick}
              >
                {convertToPrice(data.data.response.totalPrice)} 결제하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
