import React from "react";
import CheckBox from "./CheckBox";

const conditionOptions = [
  {
    label: "카카오페이 결제조건 및 개인정보 제3자 제공 동의",
    id: "kakaoPay",
  },
  { label: "개인정보 제3자 제공 동의", id: "privateInfo" },
];

export default function CheckBoxGroup({ onChange, value }) {
  return (
    <div>
      {conditionOptions.map((option) => (
        <CheckBox
          name="condition-checkbox-group"
          onChange={onChange}
          id={option.id}
          value={value}
          label={option.label}
        />
      ))}
    </div>
  );
}
