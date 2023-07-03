import React from "react";

export default function Checkbox({ color, checkList, setCheckList }) {
  const handleChange = (e) => {
    const color = e.target.value;
    if (checkList.includes(color)) {
      setCheckList((prev) => prev.filter((c) => c !== color));
    } else {
      setCheckList((prev) => [...prev, color]);
    }
  };

  return (
    <label className="cursor-pointer flex items-center" htmlFor={color}>
      <input
        className="mr-3 w-4 h-4"
        id={color}
        type="checkbox"
        name={color}
        value={color}
        checked={checkList.includes(color)}
        onChange={handleChange}
      />
      {color}
    </label>
  );
}
