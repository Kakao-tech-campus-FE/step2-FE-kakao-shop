import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";
import { styled } from "styled-components";

const InputGroup = ({ id, name, type, value, onChange, className, label, placeholder }) => {
  return (
    <InputBox className={className}>
      <Label htmlFor={id}>{label}</Label>
      <br/>
      <Input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </InputBox>
  );
};

export default InputGroup;

const InputBox = styled(Box)`
  & > Label {
    text-align: left;
  }
`