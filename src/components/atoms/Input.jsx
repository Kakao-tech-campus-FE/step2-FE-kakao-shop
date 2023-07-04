import React from "react";

export default function Input({ type, value, name, placeholder, onChange }) {
  return (
    <input
      className="w-input mb-4 px-4 py-1 text-lg border rounded-md"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
