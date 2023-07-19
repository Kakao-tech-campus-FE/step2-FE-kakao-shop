import React from "react";
import Counter from "./Counter";
import { IoCloseOutline } from "react-icons/io5";
import { comma } from "../../utils/convert";

export default function SelectedOptionItem({ option }) {
  const { optionName, count, price } = option;

  return (
    <li className="relative mt-3 p-3 bg-lightGray">
      <span>{optionName}</span>
      <div className="flex justify-between items-center pt-3">
        <Counter count={count} />
        <span>{comma(price * count)}원</span>
      </div>
      <button className="absolute top-3 right-3 text-2xl text-gray-400">
        <IoCloseOutline />
      </button>
    </li>
  );
}
