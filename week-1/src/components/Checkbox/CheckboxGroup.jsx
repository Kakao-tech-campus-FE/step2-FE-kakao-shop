import React, { useState } from "react";
import Checkbox from "./Checkbox";

const colors = [
  { value: "Red", id: 1 },
  { value: "Blue", id: 2 },
  { value: "Green", id: 3 },
  { value: "Yellow", id: 4 },
  { value: "Purple", id: 5 },
];

export default function CheckboxGroup() {
  const [checkList, setCheckList] = useState([]);

  return (
    <form className="bg-slate-700 text-gray-200 font-semibold text-lg w-1/2">
      <h2 className="text-xl ml-4 pt-3">Test Checkbox</h2>
      <fieldset className="p-4 flex flex-col gap-3 pl-10">
        {colors.map((color) => (
          <Checkbox
            key={color.id}
            color={color.value}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        ))}
      </fieldset>
    </form>
  );
}
