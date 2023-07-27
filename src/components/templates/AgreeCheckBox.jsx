import React, { useState } from "react";
import CheckList from "../organisms/CheckList";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import { Slide, toast } from "react-toastify";
import Toast from "../molecules/Toast";
import paymentInstance from "../../apis/payment";

const toastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  autoClose: 3000,
  closeButton: false,
  transition: Slide,
  hideProgressBar: true,
  style: {
    padding: "12px 30px",
    backgroundColor: "#333333",
  },
};

const checkboxData = [
  { id: 1, text: "구매조건 확인 및 결제 진행 동의" },
  { id: 2, text: "개인정보 제3자 제공 동의" },
];

export default function AgreeCheckBox({
  productsName,
  price,
  quantity,
  modalRef,
  address,
  selected,
}) {
  const [checkedList, setCheckedList] = useState([]);

  const handleAllChange = (isChecked) => {
    setCheckedList(isChecked ? [] : checkboxData);
  };
  const handleAgreeChange = (isChecked, list) => {
    if (isChecked) {
      setCheckedList((prev) => prev.filter((item) => item.id !== list.id));
    } else {
      setCheckedList((prev) => [...prev, list]);
    }
  };
  const handleOrderClick = async () => {
    if (address === "주소를 검색해보세요.") {
      toast(<Toast text="주소를 입력해주세요." button={false} />, toastOptions);
      return;
    }
    if (selected === "배송 요청사항을 선택해주세요") {
      toast(
        <Toast text="배송 요청사항을 선택해주세요." button={false} />,
        toastOptions
      );
      return;
    }
    if (checkedList.length !== checkboxData.length) {
      modalRef.current.showModal();
      return;
    }
    try {
      const response = await paymentInstance.payRequest(
        productsName,
        quantity,
        price
      );
      const {
        data: { next_redirect_pc_url, tid },
      } = response;
      window.localStorage.setItem("tid", tid);
      window.location.assign(next_redirect_pc_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col bg-white border-y">
      <CheckList
        checkboxData={checkboxData}
        checkedList={checkedList}
        onAllChange={handleAllChange}
        onChange={handleAgreeChange}
      />
      <aside className="px-5 py-3 text-sm bg-gray-50">
        <p className="font-semibold">법적고지</p>
        <p className="text-gray-800">
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
          포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
          통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및
          환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </p>
      </aside>
      <Button
        padding="py-3"
        textsize="lg"
        font="bold"
        color="yellow"
        onClick={handleOrderClick}
      >
        {comma(price)}원 결제하기
      </Button>
    </section>
  );
}
