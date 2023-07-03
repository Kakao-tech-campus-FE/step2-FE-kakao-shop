import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-slate-700 my-3 text-gray-200 w-1/2">
      <h2 className="text-xl ml-4 pt-3 font-semibold">Test Toggle</h2>
      <div className="flex p-4 pl-10">
        <div
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer duration-300 ${
            toggle ? "bg-blue-400" : "bg-white"
          }`}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div
            className={`bg-slate-700 h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out ${
              toggle ? " transform translate-x-6" : ""
            }`}
          ></div>
        </div>
        <p className="ml-3 bg-transparent text-md font-bold">
          {toggle ? "ON" : "OFF"}
        </p>
      </div>
    </div>
  );
}
