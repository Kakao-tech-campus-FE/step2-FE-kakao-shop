import React, { useContext } from "react";
import { CheckboxContext } from "./CheckboxContext";

export default function Checkbox({ children, value }) {
  const { isChecked, toggleCheck } = useContext(CheckboxContext);
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleCheck({ checked, value })}
      />
      {children}
    </label>
  );
}
