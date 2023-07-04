import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

export default function InputGroup({
  children,
  id,
  type,
  value,
  name,
  placeholder,
  onChange,
}) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{children}</Label>
      <Input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
