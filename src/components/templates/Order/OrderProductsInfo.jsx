import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import OrderProduct from "../../organisms/Order/OrderProduct";
import Button from "../../atoms/Button";
import { getAllQuantity } from "../../../utils/convert";

export default function OrderProductsInfo({ products }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className="border-t">
      <Button
        className="flex justify-between items-center bg-white"
        padding="pr-5"
        width="w-full"
        onClick={handleOpen}
      >
        <p className="px-5 py-3 text-lg font-extrabold bg-white">
          주문상품 정보{" "}
          <span className="text-base font-normal">
            (총 {getAllQuantity(products)}개)
          </span>
        </p>
        <SlArrowDown className={isOpen ? "rotate-180" : ""} />
      </Button>
      {isOpen && (
        <ul className="flex flex-col gap-2">
          {products.map((product, index) => (
            <OrderProduct key={index} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
