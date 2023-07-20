import React, { useReducer, useState } from "react";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import optionReducer from "../../reducer/option-reducer";
import { useMutation } from "react-query";
import cartInstance from "../../apis/cart";
import { useSelector } from "react-redux";
import PurchaseGroup from "../molecules/PurchaseGroup";
import { useNavigate } from "react-router-dom";

export default function OptionColumn({ productData, modalRef }) {
  const { options } = productData;
  const navigate = useNavigate();
  const [isOptionShow, setIsOptionShow] = useState(false);
  const user = useSelector((state) => state.user.isLoggedIn);
  const [optionList, dispatch] = useReducer(optionReducer, []);
  const { mutate } = useMutation({
    mutationFn: cartInstance.addCart,
  });

  const handleOptionClick = (option) => {
    dispatch({ type: "add", option });
  };
  const handleOptionUpdate = (id, flag) => {
    dispatch({ type: "update", id, flag });
  };
  const handleOptionDelete = (id) => {
    dispatch({ type: "delete", id });
  };
  // handleAddCart, handlePurchase 중복 제거
  const handleAddCart = () => {
    if (!user) {
      modalRef.current.showModal();
      return;
    }
    if (optionList.length === 0) {
      alert("옵션을 먼저 선택해주세요.");
      return;
    }
    mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: () => {
          alert("장바구니에 삼품이 담겼습니다.");
          dispatch({ type: "clear" });
          setIsOptionShow(false);
        },
      }
    );
  };
  const handlePurchase = () => {
    if (!user) {
      modalRef.current.showModal();
      return;
    }
    if (optionList.length === 0) {
      alert("옵션을 먼저 선택해주세요.");
      return;
    }
    mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: () => navigate("/purchase"),
      }
    );
  };
  return (
    <section className="basis-1/3 border-l pl-8">
      <OptionList
        isOptionShow={isOptionShow}
        setIsOptionShow={setIsOptionShow}
        options={options}
        optionList={optionList}
        handleOptionClick={handleOptionClick}
        handleOptionUpdate={handleOptionUpdate}
        handleOptionDelete={handleOptionDelete}
      />
      <DeliveryForm />
      <PurchaseGroup
        optionList={optionList}
        onAddCart={handleAddCart}
        onPurchase={handlePurchase}
      />
    </section>
  );
}
