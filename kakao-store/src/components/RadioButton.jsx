import { useContext } from "react";
import { RadioContent } from "../App";
import "../styles/radiobutton.css"

const RadioButton = ({ children, value, name, defaultChecked }) => {
  const radioList = useContext(RadioContent);

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        checked={radioList.value !== undefined ? value === radioList.value : undefined}
        onChange={(e) => radioList.onChange && radioList.onChange(e.target.value)}
      />
      {children}
    </label>
  );
}

export default RadioButton;