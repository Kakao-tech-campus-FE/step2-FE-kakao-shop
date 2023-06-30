import { useState } from "react";
import "./ToggleBtn.css";

const Toggle = ({ handleToggle }) => {
  const [toggleVal, setToggleVal] = useState(false);

  return (
    <label className="switch">
      <input
        type="checkbox"
        value={toggleVal}
        onClick={() => {
          setToggleVal(!toggleVal);
          handleToggle(toggleVal);
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
export default Toggle;
