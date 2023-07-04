import { useState, useEffect } from "react";

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    console.log("ToggleButton: " + isToggled);
  }, [isToggled]);

  const handleClick = () => {
    setIsToggled((prevToggled) => !prevToggled);
  };

  return <button onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>;
}
