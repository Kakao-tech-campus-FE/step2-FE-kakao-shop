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
  valid, // 유효성 검사를 통과했는지
  onChange, // 회원가입시, 마지막 비밀번호 확인 input이 유효성 검사를 통과하는 즉시 버튼을 활성화시켜주기위해 사용
  onKeyPress, // 로그인시, enter키를 통해 로그인 가능하도록 사용
  onClick, // 이메일 중복 확인을 위한 onClick 핸들러
  onBlur, // onBlur시, 유효성 체크
  placeholder,
  label, // label children
  form, // 로그인 그룹인지 회원가입 그룹인지 구분
  errorMsg, // 유효성 검사의 에러메세지
}) => {
  return (
    <Box>
      {/* 회원가입 form에만 label을 달았습니다. */}
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
      {/* 회원가입 form의 이메일에만 중복확인 버튼 */}
      {type === "email" && form === "register" && (
        <Button
          className="absolute right-0 top-[45px] rounded-[100px] border border-gray-300 bg-white px-3 py-1 text-[13px]"
          onClick={onClick}
        >
          중복확인
        </Button>
      )}
      {form === "register" && (
        // 에러메세지 출력
        <div className="mb-3 mt-1 text-xs text-red-500">
          {valid[name] !== true ? errorMsg[valid[name]] : ""}
        </div>
      )}
    </Box>
  );
};

export default InputGroup;
