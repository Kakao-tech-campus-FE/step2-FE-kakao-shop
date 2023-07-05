// package
import { useState } from "react";

// css
import "../styles/ToggleButton.css";

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled((prevToggled) => !prevToggled);
  };

  return <button onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>;
}
