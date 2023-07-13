import React, { useState } from "react";
import { CheckBoxLabel, CheckAllBoxLabel } from "./style";

export default function Checklist() {
  const [checkOptions, setCheckOptions] = useState([]);

  const handleOptionClick = (e) => {
    if (!checkOptions.includes(e.target.value)) {
      setCheckOptions((prev) => [...prev, e.target.value]);
    } else {
      setCheckOptions(checkOptions.filter((el) => el !== e.target.value));
    }
  };

  const handleOptionClickAll = (e) => {
    if (e.target.checked) {
      setCheckOptions(["pay", "privacy"]);
    } else {
      setCheckOptions([]);
    }
  };
  return (
    <div
      style={{
        border: "1px solid lightgray",
        width: "800px",
        marginLeft: "10px",
        paddingBottom: "10px",
      }}
    >
      <CheckAllBoxLabel>
        <input
          type="checkbox"
          checked={checkOptions.length === 2}
          onChange={handleOptionClickAll}
        />
        전체 동의하기
      </CheckAllBoxLabel>
      <CheckBoxLabel>
        <input
          type="checkbox"
          value="pay"
          checked={checkOptions.includes("pay")}
          onChange={handleOptionClick}
        />
        카카오페이 결제조건 및 개인정보 제3자 제공 동의
      </CheckBoxLabel>
      <CheckBoxLabel>
        <input
          type="checkbox"
          value="privacy"
          checked={checkOptions.includes("privacy")}
          onChange={handleOptionClick}
        />
        개인정보 제3자 제공 동의
      </CheckBoxLabel>
    </div>
  );
}
