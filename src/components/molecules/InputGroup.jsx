import React from "react";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

/**
 * 입력을 받는 영역그룹
 * @param id
 * @param name input name
 * @param type input type
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
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
}) {
  return (
    <Box className="">
      <Input
        className=" w-full box-border h-10 border-solid border-zinc-300 border-0 border-b-2 focus:border-black focus:outline-none text-lg"
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </Box>
  );
}
