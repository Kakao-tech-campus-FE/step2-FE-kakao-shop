import React, { useState } from "react";
import Radio from "./Radio";

const roleValues = [
  { role: "leader", value: "그룹장", id: 1 },
  { role: "challenger", value: "챌린저", id: 2 },
  { role: "scheduler", value: "스케줄러", id: 3 },
  { role: "reactor", value: "리액셔너", id: 4 },
  { role: "reminder", value: "리마인더", id: 5 },
];

export default function RadioGroup() {
  const [radioValue, setRadioValue] = useState("leader");

  return (
    <form className="bg-slate-700 text-gray-200 font-semibold text-lg w-1/2">
      <h2 className="text-xl ml-4 pt-3">Test Radio</h2>
      <fieldset className="p-4 flex flex-col gap-3 pl-10">
        {roleValues.map((roleValue) => (
          <Radio
            key={roleValue.id}
            role={roleValue.role}
            value={roleValue.value}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
        ))}
      </fieldset>
    </form>
  );
}
