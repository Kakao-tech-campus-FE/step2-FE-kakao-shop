import React from "react";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

/**
 * 입력을 받는 영역그룹
 * @param id
 * @param name input name
 * @param type input type
 * @param placeholder input창 hint
 * @param label input label
 * @param value
 * @param onChange onChange 핸들러함수
 * @param onBlur input focus out시 핸들러 함수
 * @returns Label + Input
 */
export default function InputGroup({
  id,
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  onKeyDown,
}) {
  return (
    <Box className="">
      <Label htmlFor={id} className="text-xs text-zinc-500">
        {label}
        <Input
          className=" w-full box-border h-10 border-solid border-zinc-300 border-0 border-b-2 focus:border-black focus:outline-none text-lg font-semibold"
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </Label>
    </Box>
  );
}
