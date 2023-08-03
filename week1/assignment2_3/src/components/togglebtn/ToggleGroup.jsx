import { useState } from "react";
import Toggle from "./ToggleBtn";
import "./ToggleGroup.css";

const ToggleGroup = () => {
  const [isToggled, setIsToggled] = useState(false);
  const imgLink = {
    full_moon:
      "https://em-content.zobj.net/thumbs/160/whatsapp/352/full-moon_1f315.png",
    new_moon:
      "https://em-content.zobj.net/thumbs/160/whatsapp/352/new-moon_1f311.png",
  };
  const handleToggle = (toggleVal) => {
    setIsToggled(!toggleVal);
  };
  return (
    <div className="toggle-group">
      <div className="img-wrapper">
        <img
          className={`tg-image ${isToggled ? "hide" : ""}`}
          src={imgLink.new_moon}
          alt="Moon image"
        />
        <img
          className={`tg-image full-moon ${isToggled ? "" : "hide"}`}
          src={imgLink.full_moon}
          alt="Moon image"
        />
      </div>

      <Toggle className="toggle-btn" handleToggle={handleToggle} />
    </div>
  );
};
export default ToggleGroup;
