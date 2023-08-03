import { useContext } from "react";
import { RadioContext } from "../../contexts/RadioContext";

export const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  const group = useContext(RadioContext);

  return (
    <label style={{ padding: "5px" }}>
      <input
        type="radio"
        value={value}
        name={name}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {children}
    </label>
  );
}