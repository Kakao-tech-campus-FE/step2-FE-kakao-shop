// Register Form에 사용될 아이디(이메일), 비밀번호, 비밀번호 확인에 쓰일
// InputGroup을 만드는 과정

import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
  inputClass,
  onFocus,
  onBlur,
}) => {
  return (
    <label>
      <Box className={className}>
        <Label htmlFor={id}>{label}</Label>
        <Input
          className={inputClass}
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Box>
    </label>
  );
};

export default InputGroup;
