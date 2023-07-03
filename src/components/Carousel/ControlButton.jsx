import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function ControlButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white opacity-25 text-slate-700 duration-100 hover:opacity-100 absolute top-0 bottom-0 ${
        direction === "prev" ? "left-6" : "right-6"
      } my-auto rounded-full w-14 h-14 flex justify-center items-center z-20`}
    >
      {direction === "prev" ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
    </button>
  );
}
