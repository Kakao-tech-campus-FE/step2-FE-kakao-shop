import React from "react";

export default function RequestSelectBox({ options, selected, onChange }) {
  return (
    <select
      className="w-full p-2 text-sm border rounded-sm"
      value={selected}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.name}
          disabled={option.value === "placeholder"}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
