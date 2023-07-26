import React from "react";
import { BsCheckLg } from "react-icons/bs";

export default function CheckBox({ children, checked, onChange, size }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        className={`relative shrink-0 appearance-none ${size} bg-white checked:bg-yellow border cursor-pointer peer`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <BsCheckLg
        className={`absolute ${size} text-white hidden peer-checked:block`}
      />
      {children}
    </label>
  );
}
