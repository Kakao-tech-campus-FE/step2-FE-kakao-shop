import React, { useReducer, useState } from "react";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import optionReducer from "../../reducer/option-reducer";
import { useMutation, useQueryClient } from "react-query";
import cartInstance from "../../apis/cart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderGroup from "../molecules/OrderGroup";
import Toast from "../molecules/Toast";
import { Slide, toast } from "react-toastify";

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

export default function OptionColumn({ productData, modalRef }) {
  const { options } = productData;
  const navigate = useNavigate();
  const [isOptionShow, setIsOptionShow] = useState(false);
  const user = useSelector((state) => state.user.isLoggedIn);
  const [optionList, dispatch] = useReducer(optionReducer, []);
  const queryClient = useQueryClient();
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
      toast(
        <Toast text="옵션을 먼저 선택해주세요." button={false} />,
        toastOptions
      );
      return;
    }
    mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(["carts"]);
          dispatch({ type: "clear" });
          setIsOptionShow(false);
          toast(
            <Toast text="장바구니에 상품이 담겼습니다." button={true} />,
            toastOptions
          );
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
      toast(
        <Toast text="옵션을 먼저 선택해주세요." button={false} />,
        toastOptions
      );
      return;
    }
    mutate(
      optionList.map((option) => ({
        optionId: option.id,
        quantity: option.count,
      })),
      {
        onSuccess: () => navigate("/order"),
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
        onPurchase={handlePurchase}
      />
    </section>
  );
}
