import React from 'react'
import InputBox from "../../atoms/form/InputBox"
import Label from "../../atoms/form/Label"
import Input from "../../atoms/form/Input"
import FormatCheck from "../../atoms/form/FormatCheck"
import FormatCheckBox from '../../atoms/form/FormatCheckBox'

/**
 * input + 라벨 + 안내메세지 1세트
 * @param {*} props
 * @param {string} props.id - input 요소에 부여할 id
 * @param {string} props.type - input 요소의 타입 (text password email)
 * @param {string} props.label - label 내용
 * @param {function} props.onChange - input 값 변경시 실행할 함수
 * @param {*} props.message - 안내메세지
 * @returns {*}
 */
const InputGroup = ( props ) => {
  return (
    <>
      <InputBox>
          <Label htmlFor={props.id}>{props.label}</Label>
          <Input id={props.id} 
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