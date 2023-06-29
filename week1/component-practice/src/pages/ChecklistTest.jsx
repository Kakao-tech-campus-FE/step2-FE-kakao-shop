import Checklist from "../components/Checklist";
import React, { useState } from "react";

export default function ChecklistTest() {
  const [checked, setChecked] = useState([
    { id: 1, checked: false, text: "체크박스1" },
    { id: 2, checked: false, text: "체크박스2" },
    { id: 3, checked: false, text: "체크박스3" },
    { id: 4, checked: false, text: "체크박스4" },
  ]);

  return (
    <>
      {checked.map((item) => (
        <Checklist key={item.id} item={item} />
      ))}
    </>
  );
}
