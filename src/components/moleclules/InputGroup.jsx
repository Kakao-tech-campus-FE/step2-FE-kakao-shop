import React from "react";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidEmail: "이메일 형식이 올바르지 않습니다.",
  invalidPw: "8~20자 영문, 숫자, 특수문자를 사용하세요.",
  invalidPwConfirm: "비밀번호가 일치하지 않습니다.",
};

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
      <div className="mb-3 mt-1 text-xs text-red-500">
        {valid[name] !== true ? ERROR_MSG[valid[name]] : ""}
      </div>
    </Box>
  );
};

export default InputGroup;
