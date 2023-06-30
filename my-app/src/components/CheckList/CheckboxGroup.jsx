import React from "react";
import { CheckboxContext } from "./CheckboxContext";

export default function CheckboxGroup({ children, values, onChange }) {
  // value 값으로 체크 항목 검사
  const isChecked = (value) => values.includes(value);

  // 체크 항목을 values에 추가/제거
  const toggleCheck = ({ checked, value }) => {
    if (checked) {
      onChange(values.concat(value));
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };

  return (
    <CheckboxContext.Provider value={{ isChecked, toggleCheck }}>
      {children}
    </CheckboxContext.Provider>
  );
}
