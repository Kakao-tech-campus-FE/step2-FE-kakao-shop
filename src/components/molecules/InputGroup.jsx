import React from 'react'
import Box from "../atoms/Box"
import Label from "../atoms/Label"
import Input from "../atoms/Input"
import ErrorMessage from "../atoms/ErrorMessage"
import EmailCheck from '../atoms/EmailCheck'
import UnderInputBox from '../atoms/UnderInputBox'


// input 박스 + 라벨 + 에러메세지 1세트

const InputGroup = ( props ) => {
  return (
    <>
      <Box>
          <Label htmlFor={props.id}>{props.label}</Label>
          <Input id={props.id} 
            value={props.value} 
            type={props.type} 
            placeholder={props.label} 
            onChange={props.onChange}></Input>
      </Box>
      <UnderInputBox>
        <ErrorMessage>{props.message}</ErrorMessage>
      </UnderInputBox>
    </>
  )
}

export default InputGroup