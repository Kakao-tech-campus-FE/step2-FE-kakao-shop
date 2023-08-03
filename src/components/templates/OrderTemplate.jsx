import { useMutation } from "@tanstack/react-query";
import { order } from "../../apis/order";
import { useNavigate } from "react-router-dom";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";
import OrderList from "../moleclules/OrderList";
import useCheckBox from "../../hooks/useCheckBox";
import CheckBox from "../atoms/CheckBox";
import { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import Modal from "../moleclules/Modal";
import { staticServerUri } from "../../constants/serverUri";

const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();

  const { products, totalPrice } = data.data.response;

  const { checkedOptions, handleOnChangeCheck, handleOnChangeCheckAll } =
    useCheckBox([], ["order", "policy"]);

  const [agreeModal, setAgreeModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const [selectedReq, setSelectedReq] = useState("");
  const [orderRequest, setOrderRequest] = useState("");
  const [openedBox, setOpenedBox] = useState(["shipping", "products"]);

  const { mutate } = useMutation({
    mutationKey: "order",
    mutationFn: order,
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

  const handleOnClickBox = (boxName) => {
    if (openedBox.includes(boxName)) {
      setOpenedBox((prev) => prev.filter((el) => el !== boxName));
    } else {
      setOpenedBox((prev) => [...prev, boxName]);
    }
  };

  return (
    <div className="bg-[#f4f4f4]">
      <Container className="max-w-[870px] px-0 pb-5">
        <div className="border-b border-gray-200 bg-white leading-[44px]">
          <h1 className="text-center text-[15px] font-bold">주문하기</h1>
        </div>
        <button
          className="relative w-full bg-white px-4 py-3 text-start text-lg font-bold"
          onClick={() => {
            handleOnClickBox("shipping");
          }}
        >
          배송지 정보
          {openedBox.includes("shipping") ? (
            <BsChevronUp className="absolute right-4 top-4" />
          ) : (
            <BsChevronDown className="absolute right-4 top-4" />
          )}
        </button>
        {openedBox.includes("shipping") && (
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
        )}

        <button
          className="relative mt-3 w-full border-b bg-white px-4 py-3 text-start text-lg font-bold"
          onClick={() => {
            handleOnClickBox("products");
          }}
        >
          주문상품 정보
          {openedBox.includes("products") ? (
            <BsChevronUp className="absolute right-4 top-4" />
          ) : (
            <BsChevronDown className="absolute right-4 top-4" />
          )}
        </button>
        {openedBox.includes("products") && (
          <div>
            {products.map((item) =>
              item.carts.reduce((acc, cur) => acc + cur.quantity, 0) ? (
                <OrderList item={item} key={item.id} options={item.carts} />
              ) : null
            )}
          </div>
        )}

        <div className="mt-3 bg-white">
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
        <button
          className="w-full bg-kakao p-4 text-xl font-bold text-[#333]"
          onClick={() => {
            if (checkedOptions.length === 2) {
              mutate(null, {
                onError: () => {
                  // 결제 실패 시 모달 창이 뜨고, 메인 페이지로 이동한다.
                  setFailModal(true);
                },
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  navigate(staticServerUri + `/orders/complete/${id}`, {
                    replace: true,
                  });
                },
              });
            } else {
              setAgreeModal(true);
            }
          }}
        >
          {comma(totalPrice)}원 결제하기
        </button>
        {agreeModal && (
          <Modal
            contentText={"구매조건 확인 동의를 체크해주세요."}
            type={"one"}
            buttonText={"확인"}
            onClick={() => {
              setAgreeModal(false);
            }}
          ></Modal>
        )}
        {failModal && (
          <Modal
            contentText={"결제에 실패했습니다."}
            type={"one"}
            buttonText={"홈으로"}
            onClick={() => {
              navigate(staticServerUri + "/", { replace: true });
            }}
          ></Modal>
        )}
      </Container>
    </div>
  );
};

export default OrderTemplate;
