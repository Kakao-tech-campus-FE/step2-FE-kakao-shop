import React, { useState } from "react";
import CheckList from "../organisms/CheckList";

export default function AgreeCheckBox() {
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);

  const handleAllChange = () => {
    if (isFirstChecked && isSecondChecked) {
      setIsFirstChecked(false);
      setIsSecondChecked(false);
    } else {
      setIsFirstChecked(true);
      setIsSecondChecked(true);
    }
  };
  const handleAgreeChange = (e) => {
    if (e.target.id === "checkbox1") {
      setIsFirstChecked((prev) => !prev);
    } else {
      setIsSecondChecked((prev) => !prev);
    }
  };
  return (
    <section className="bg-white border-y">
      <CheckList
        isFirstChecked={isFirstChecked}
        isSecondChecked={isSecondChecked}
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
    </section>
  );
}
