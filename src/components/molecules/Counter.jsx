import React from "react";
import Button from "../atoms/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function Counter({ count }) {
  return (
    <div className="flex w-28">
      <Button
        className="flex justify-center items-center"
        width="w-7"
        height="h-7"
        color="white"
        border="border border-gray-300"
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
      >
        <AiOutlinePlus />
      </Button>
    </div>
  );
}
