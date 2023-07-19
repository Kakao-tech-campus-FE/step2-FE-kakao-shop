import React, { useState } from "react";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import cartImage from "../../assets/cart_white.png";
import { comma } from "../../utils/convert";

export default function OptionColumn({ productData }) {
  const { options } = productData;
  const [optionList, setOptionList] = useState([]);

  const getAllCount = () => {
    return optionList.reduce((pre, cur) => pre + cur.count, 0);
  };
  const getAllPrice = () => {
    return optionList.reduce((pre, cur) => pre + cur.price, 0);
  };
  const handleOptionClick = (option) => {
    const { id, optionName, price } = option;
    setOptionList((prev) => {
      const hasOption = Boolean(prev.find((opt) => opt.id === id));

      if (hasOption) {
        return prev.map((opt) =>
          opt.id === id ? { ...opt, count: opt.count + 1 } : opt
        );
      }
      return [...prev, { id, optionName, price, count: 1 }];
    });
  };
  const handleOptionUpdate = (id, type) => {
    setOptionList((prev) =>
      prev.map((opt) =>
        opt.id === id
          ? { ...opt, count: type === "plus" ? opt.count + 1 : opt.count - 1 }
          : opt
      )
    );
  };
  const handleOptionDelete = (id) => {
    setOptionList((prev) => prev.filter((opt) => opt.id !== id));
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
        <span>총 수량 {getAllCount()}개</span>
        <span>총 주문금액 {comma(getAllPrice())}원</span>
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
