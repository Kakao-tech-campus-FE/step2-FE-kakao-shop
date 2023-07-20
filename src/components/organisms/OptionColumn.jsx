import React, { useReducer, useState } from "react";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import cartImage from "../../assets/cart_white.png";
import { comma } from "../../utils/convert";
import optionReducer from "../../reducer/option-reducer";
import { useMutation } from "react-query";
import cartInstance from "../../apis/cart";
import { useSelector } from "react-redux";

export default function OptionColumn({ productData, modalRef }) {
  const { options } = productData;
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
      <Box className="flex justify-between py-3 text-lg font-semibold">
        <p>총 수량 {getAllCount(optionList)}개</p>
        <p>
          총 주문금액{" "}
          <span className="text-red-500 font-extrabold">
            {comma(getAllPrice(optionList))}
          </span>
          원
        </p>
      </Box>
      <Box className="flex justify-between pb-8">
        <Button padding="p-2" color="black" radius="sm" onClick={handleAddCart}>
          <Icon alt="장바구니 담기" width="w-9" height="h-9">
            {cartImage}
          </Icon>
        </Button>
        <Button padding="px-16 py-3" font="semibold" color="yellow" radius="sm">
          톡딜가로 구매하기
        </Button>
      </Box>
    </section>
  );
}

const getAllCount = (items) => {
  return items.reduce((pre, cur) => pre + cur.count, 0);
};
const getAllPrice = (items) => {
  return items.reduce((pre, cur) => pre + cur.price * cur.count, 0);
};
