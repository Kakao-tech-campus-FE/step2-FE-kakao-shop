import React, { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import OrderGroup from "../../molecules/ProductDetail/OrderGroup";
import optionReducer from "../../../reducer/option-reducer";
import useCart from "../../../hooks/useCart";
import useToasts from "../../../hooks/useToast";

export default function OptionColumn({ productData, modalRef }) {
  const { options } = productData;
  const navigate = useNavigate();
  const [isOptionShow, setIsOptionShow] = useState(false);
  const user = useSelector((state) => state.user.isLoggedIn);
  const [optionList, dispatch] = useReducer(optionReducer, []);
  const { addCart } = useCart();
  const { showToast } = useToasts();

  const handleOptionClick = (option) => {
    dispatch({ type: "add", option });
  };
  const handleOptionUpdate = (id, flag) => {
    dispatch({ type: "update", id, flag });
  };
  const handleOptionDelete = (id) => {
    dispatch({ type: "delete", id });
  };
  const handleAddCart = () => {
    if (optionList.length === 0) {
      showToast("옵션을 먼저 선택해주세요.", false);
      return;
    }
    if (!user) {
      modalRef.current.showModal();
      return;
    }
    addCart.mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: async () => {
          dispatch({ type: "clear" });
          setIsOptionShow(false);
          showToast("장바구니에 상품이 담겼습니다.", true);
        },
      }
    );
  };
  const handleOrder = () => {
    if (optionList.length === 0) {
      showToast("옵션을 먼저 선택해주세요.", false);
      return;
    }
    if (!user) {
      modalRef.current.showModal();
      return;
    }
    addCart.mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: async () => {
          navigate("/order");
        },
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
      <OrderGroup
        optionList={optionList}
        onAddCart={handleAddCart}
        onOrder={handleOrder}
      />
    </section>
  );
}
