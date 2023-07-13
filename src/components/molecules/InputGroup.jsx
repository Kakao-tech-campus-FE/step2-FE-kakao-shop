import React from "react";
import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputGroup = ({
  id,
  type,
  name,
  value,
  onChange,
  onBlur,
  label,
  placeholder
}) => {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></Input>
    </Box>
  );
};

export default InputGroup;
