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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Input>
    </Box>
  );
};

export default InputGroup;
