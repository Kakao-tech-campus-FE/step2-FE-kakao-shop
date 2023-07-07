import React from 'react'
import InputBox from "../../atoms/form/InputBox"
import Label from "../../atoms/form/Label"
import Input from "../../atoms/form/Input"
import FormatCheck from "../../atoms/form/FormatCheck"
import FormatCheckBox from '../../atoms/form/FormatCheckBox'


// input 박스 + 라벨 + 에러메세지 1세트

const InputGroup = ( props ) => {
  return (
    <>
      <InputBox>
          <Label htmlFor={props.id}>{props.label}</Label>
          <Input id={props.id} 
            value={props.value} 
            type={props.type} 
            placeholder={props.label} 
            onChange={props.onChange}></Input>
      </InputBox>
      <FormatCheckBox>
          <FormatCheck>{props.message}</FormatCheck>
      </FormatCheckBox>
    </>
  )
}

export default InputGroup