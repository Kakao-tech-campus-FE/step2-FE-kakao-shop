import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Box from "../atoms/Box";

/**
 * 입력을 받는 영역그룹
 * @param id
 * @param name input name
 * @param type input type
 * @param label label 텍스트
 * @param placeholder input창 hint
 * @param value
 * @param onChange onChange 핸들러함수
 * @param onBlur input focus out시 핸들러 함수
 * @returns Label + Input
 */
export default function InputGroup({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
}) {
  return (
    <Box className="mt-5">
      <Label htmlFor={id} className=" font-semibold ">
        {label}
      </Label>
      <Input
        className=" block  w-full box-border mt-2 h-8 "
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </Box>
  );
}
