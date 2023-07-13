import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

/*
 * inputRef: focus를 주기 위해 ref 설정을 위한 props
 * autoFocus: 페이지에 들어오면 포커스를 주기 위한 props
 */
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
    <Box className="flex flex-col grow">
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
