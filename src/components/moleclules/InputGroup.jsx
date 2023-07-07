import React from "react";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  onBlur,
  valid,
  placeholder,
  label,
  form,
  errorMsg,
}) => {
  return (
    <Box>
      {form === "register" && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        valid={valid}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {form === "register" && (
        <div className="mb-3 mt-1 text-xs text-red-500">
          {valid[name] !== true ? errorMsg[valid[name]] : ""}
        </div>
      )}
    </Box>
  );
};

export default InputGroup;
