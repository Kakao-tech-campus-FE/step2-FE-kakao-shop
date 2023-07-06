import React from "react";

const Input = ({
  id,
  name,
  type,
  value,
  valid,
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    <input
      className={`my-1 border-b-[1.5px]  py-1.5 focus:border-b-[1.5px]  focus:outline-none ${
        valid[name] === true || valid[name] === ""
          ? "border-gray-300 focus:border-black"
          : "border-red-400  focus:border-red-400"
      }`}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default Input;
