import { useState } from "react";
import Toggle from "./ToggleBtn";

const ToggleGroup = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = (toggleVal) => {
    setIsToggled(!toggleVal);
  };
  return (
    <div>
      <Toggle handleToggle={handleToggle} />
      <span>{isToggled ? "On" : "Off"}</span>
    </div>
  );
};
export default ToggleGroup;
