import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Counter from "../../molecules/Common/Counter";
import { comma } from "../../../utils/convert";

export default function SelectedOptionItem({ option, onUpdate, onDelete }) {
  const { id, optionName, count, price } = option;

  return (
    <li className="relative mt-3 p-3 bg-lightGray">
      <span>{optionName}</span>
      <div className="flex justify-between items-center pt-3">
        <Counter count={count} id={id} onClick={onUpdate} />
        <span>{comma(price * count)}원</span>
      </div>
      <button
        className="absolute top-3 right-3 text-2xl text-gray-400"
        onClick={() => onDelete(id)}
      >
        <IoCloseOutline />
      </button>
    </li>
  );
}
