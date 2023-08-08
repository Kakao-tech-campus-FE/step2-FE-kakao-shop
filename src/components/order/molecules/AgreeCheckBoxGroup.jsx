import React from "react";
import CheckBox from "../../common/atoms/CheckBox";

export default function AgreeCheckBoxGroup({
  options,
  checkboxState,
  setCheckboxState,
}) {
  const handleAllAgree = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCheckboxState((prevState) => {
        const newState = {};
        for (const key in prevState) {
          newState[key] = true;
        }
        return newState;
      });
    } else {
      setCheckboxState((prevState) => {
        const newState = {};
        for (const key in prevState) {
          newState[key] = false;
        }
        return newState;
      });
    }
  };

  const handleOnChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxState({
      ...checkboxState,
      [name]: checked,
    });
  };

  const isAllChecked = () => {
    return Object.values(checkboxState).every((checked) => checked);
  };

  return (
    <div className="flex w-full flex-col bg-white p-5 tracking-tight">
      <div className="border-0 border-b border-solid border-zinc-300 ">
        <CheckBox
          name={"allAgree"}
          value={"allAgree"}
          id={"allAgree"}
          onChange={handleAllAgree}
          checked={isAllChecked()}
          label={"전체 동의하기"}
          labelClassName={
            "text-xl font-bold flex items-center pb-3 cursor-pointer w-fit"
          }
          inputClassName={"w-6 h-6 accent-yellow-300 cursor-pointer"}
        />
      </div>
      <div className="flex flex-col py-3">
        {options.map((option) => (
          <CheckBox
            key={option.id}
            name={option.id}
            value={option.id}
            id={option.id}
            onChange={handleOnChange}
            checked={checkboxState[option.id]}
            label={option.label}
            labelClassName={
              "text-sm flex items-center accent-yellow-300 cursor-pointer w-fit"
            }
            inputClassName={"w-6 h-6 cursor-pointer"}
          />
        ))}
      </div>
    </div>
  );
}
