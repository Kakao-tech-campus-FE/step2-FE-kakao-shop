import React from "react";

export default function Radio({ role, value, radioValue, setRadioValue }) {
  return (
    <label className="cursor-pointer flex items-center" htmlFor={role}>
      <input
        className="mr-3 w-4 h-4"
        id={role}
        type="radio"
        name="roles"
        value={value}
        checked={radioValue === role}
        onChange={(e) => setRadioValue && setRadioValue(e.target.id)}
      />
      {value}
    </label>
  );
}
