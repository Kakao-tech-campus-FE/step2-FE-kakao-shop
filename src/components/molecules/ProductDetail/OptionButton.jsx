import React from "react";
import { SlArrowDown } from "react-icons/sl";

export default function OptionButton({ selected, isOptionShow, onClick }) {
  return (
    <button
      className={`flex items-center px-3 py-2 bg-gray-100 ${
        isOptionShow ? "" : "border"
      } rounded-sm`}
      onClick={onClick}
    >
      <span>선택</span>
      <span className="grow text-start pl-3 text-gray-400">
        {selected ? "" : "선택안함"}
      </span>
      <SlArrowDown
        className={`text-gray-400 ${isOptionShow ? "rotate-180" : ""}`}
      />
    </button>
  );
}
