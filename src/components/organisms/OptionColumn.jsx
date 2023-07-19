import React, { useReducer } from "react";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import cartImage from "../../assets/cart_white.png";
import { comma } from "../../utils/convert";
import optionReducer from "../../reducer/option-reducer";

export default function OptionColumn({ productData }) {
  const { options } = productData;
  const [optionList, dispatch] = useReducer(optionReducer, []);

  const getAllCount = () => {
    return optionList.reduce((pre, cur) => pre + cur.count, 0);
  };
  const getAllPrice = () => {
    return optionList.reduce((pre, cur) => pre + cur.price * cur.count, 0);
  };
  const handleOptionClick = (option) => {
    dispatch({ type: "add", option });
  };
  const handleOptionUpdate = (id, flag) => {
    dispatch({ type: "update", id, flag });
  };
  const handleOptionDelete = (id) => {
    dispatch({ type: "delete", id });
  };
  return (
    <section className="basis-1/3 border-l pl-8">
      <OptionList
        options={options}
        optionList={optionList}
        handleOptionClick={handleOptionClick}
        handleOptionUpdate={handleOptionUpdate}
        handleOptionDelete={handleOptionDelete}
      />
      <DeliveryForm />
      <Box className="flex justify-between py-3 text-lg font-semibold">
        <p>총 수량 {getAllCount()}개</p>
        <p>
          총 주문금액{" "}
          <span className="text-red-500 font-extrabold">
            {comma(getAllPrice())}
          </span>
          원
        </p>
      </Box>
      <Box className="flex justify-between pb-8">
        <Button className="shrink-0" padding="p-2" color="black" radius="sm">
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
