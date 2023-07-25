import React from "react";

export default function CheckBox({ children, id, checked, onChange, size }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        className={`${size} cursor-pointer`}
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
}
