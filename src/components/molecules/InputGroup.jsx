import Input from "../atoms/Input";
import Label from "../atoms/Label";
import { styled } from "styled-components";
import { useState } from 'react';

const InputGroup = ({ id, name, type, value, onChange, className, label, placeholder }) => {
  const [focus, setFocus] = useState(false)

  const handleFocus = () => {
    setFocus(!focus);
  }
  
  return (
    <InputBox className={className}>
      <Label htmlFor={id}>{label}</Label>
      <InputDiv onFocus={handleFocus} onBlur={handleFocus} bordercolor={focus ? "#000" : "#ccc"}>
        <Input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </InputDiv>
    </InputBox>
  );
};

export default InputGroup;

const InputBox = styled.div`
  width : 100%;
  margin : 10px 0;
`

const InputDiv = styled.div`
  border : solid ${(props) => props.bordercolor};
  border-width : 0 0 2px;
  & > Input {
    box-sizing : border-box;
    width : 100%;
    min-height : 45px;
    font-size : 16px;
    border : 0;
    outline : 0 none;
  }
`