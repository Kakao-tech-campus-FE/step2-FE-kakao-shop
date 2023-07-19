import Input from "../atoms/Input";
import Label from "../atoms/Label";
import styled from "styled-components";

const StyledInputGroup =
  // 아래의 style이 입혀진 button 태그를 생성
  styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
  `;

const InputGroup = ({
  onBlur,
  id,
  value,
  label,
  placeholder,
  className,
  onChange,
  type,
  name,
}) => {
  return (
    <StyledInputGroup>
      <Label htlmFor={id}>{label}</Label>
      <Input
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
      ></Input>
    </StyledInputGroup>
  );
};

export default InputGroup;
