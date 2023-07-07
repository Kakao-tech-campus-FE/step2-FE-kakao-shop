import React, { useState } from "react";
import Radio from "./Radio";

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState("smile");
  const imgLink = {
    smile:
      "https://em-content.zobj.net/thumbs/72/apple/354/beaming-face-with-smiling-eyes_1f601.png",
    melting:
      "https://em-content.zobj.net/thumbs/72/apple/354/melting-face_1fae0.png",
    vomitting:
      "https://em-content.zobj.net/thumbs/72/apple/354/face-vomiting_1f92e.png",
    exploding:
      "https://em-content.zobj.net/thumbs/72/apple/354/exploding-head_1f92f.png",
  };
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={imgLink[selectedValue]} alt="Emoji image" />
      <div style={{ display: "flex", margin: "16px" }}>
        <Radio
          value={"smile"}
          checked={selectedValue === "smile"}
          onChange={handleRadioChange}
        >
          smile
        </Radio>
        <Radio
          value={"melting"}
          checked={selectedValue === "melting"}
          onChange={handleRadioChange}
        >
          melting
        </Radio>
        <Radio
          value={"vomitting"}
          checked={selectedValue === "vomitting"}
          onChange={handleRadioChange}
        >
          vomitting
        </Radio>
        <Radio
          value={"exploding"}
          checked={selectedValue === "exploding"}
          onChange={handleRadioChange}
        >
          exploding
        </Radio>
      </div>
    </div>
  );
};

export default RadioGroup;
