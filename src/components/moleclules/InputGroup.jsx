import React from "react";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Button from "../atoms/Button";

const InputGroup = ({
  id,
  name,
  type,
  value,
  valid,
  onChange,
  onKeyPress,
  onClick,
  onBlur,
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
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {type === "email" && form === "register" && (
        <Button
          className="absolute right-0 top-[45px] rounded-[100px] border border-gray-300 bg-white px-3 py-1 text-[13px]"
          onClick={onClick}
        >
          중복확인
        </Button>
      )}
      {form === "register" && (
        <div className="mb-3 mt-1 text-xs text-red-500">
          {valid[name] !== true ? errorMsg[valid[name]] : ""}
        </div>
      )}
    </Box>
  );
};

export default InputGroup;
