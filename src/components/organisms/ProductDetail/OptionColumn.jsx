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
  const checkOptionSelected = () => {
    if (optionList.length !== 0) return true;
    showToast("옵션을 먼저 선택해주세요.", false);
    return false;
  };
  const checkLoggendIn = () => {
    if (user) return true;
    modalRef.current.showModal();
    return false;
  };
  const handleAddCart = () => {
    if (!checkOptionSelected()) return;
    if (!checkLoggendIn()) return;

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
        onError: (error) => {
          showToast(`잠시 후 다시 시도해주세요.`, false);
          console.log(error);
        },
      }
    );
  };
  const handleOrder = () => {
    if (!checkOptionSelected()) return;
    if (!checkLoggendIn()) return;

    addCart.mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: async () => {
          navigate("/order");
        },
        onError: (error) => {
          showToast(`잠시 후 다시 시도해주세요.`, false);
          console.log(error);
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
