import React, { useState } from "react";
import { ToggleButton, ToggleLabel, ToggleMessage } from "./style";

export default function Toggle() {
  const [toggleOption, setToggleOption] = useState(false);

  const handleOptionChange = () => {
    setToggleOption((prev) => !prev);
  };
  return (
    <>
      <ToggleLabel>
        <ToggleButton
          type="checkbox"
          checked={toggleOption}
          onChange={handleOptionChange}
        />
        로그인 상태 유지
      </ToggleLabel>
      <ToggleMessage>
        {toggleOption
          ? "로그인 상태가 유지됩니다."
          : "로그인 상태가 유지되지 않습니다."}
      </ToggleMessage>
    </>
  );
}
