import React from "react";
import Button from "../../atoms/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Counter({ count, id, onClick }) {
  return (
    <div className="flex w-28">
      <Button
        className="flex justify-center items-center disabled:text-gray-300"
        width="w-7"
        height="h-7"
        color="white"
        border="border border-gray-300"
        disabled={count <= 1}
        onClick={() => onClick(id, "minus")}
      >
        <AiOutlineMinus />
      </Button>
      <span className="grow text-center h-7 font-semibold bg-white border-y border-gray-300">
        {count}
      </span>
      <Button
        className="flex justify-center items-center"
        width="w-7"
        height="h-7"
        color="white"
        border="border border-gray-300"
        onClick={() => onClick(id, "plus")}
      >
        <AiOutlinePlus />
      </Button>
    </div>
  );
}
