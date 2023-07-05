import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

export default function InputGroup({
  children,
  inputRef,
  id,
  type,
  value,
  name,
  placeholder,
  autoFocus,
  onChange,
}) {
  return (
    <Box className="flex flex-col">
      <Label htmlFor={id}>{children}</Label>
      <Input
        inputRef={inputRef}
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
      />
    </Box>
  );
}
