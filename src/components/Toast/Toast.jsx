import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import ProgressBar from "./ProgressBar";

export default function Toast({ isShow, handleToast, text }) {
  useEffect(() => {
    let toast;
    if (isShow) {
      toast = setTimeout(() => {
        handleToast();
      }, 3000);
    }

    return () => clearTimeout(toast);
  }, [isShow, handleToast]);

  return (
    <div
      className={`px-20 py-4 rounded-md absolute bg-slate-700 text-lg text-gray-200 font-semibold duration-300 top-4 ${
        isShow ? "right-4" : "-right-full"
      }`}
    >
      <span>{text}</span>
      {isShow === true ? <ProgressBar /> : null}
      <IoCloseSharp
        className="absolute top-0 bottom-0 my-auto right-2 text-2xl cursor-pointer text-gray-400 hover:text-gray-200"
        onClick={handleToast}
      />
    </div>
  );
}
