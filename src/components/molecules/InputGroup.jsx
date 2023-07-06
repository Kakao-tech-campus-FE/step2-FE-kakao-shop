import React from 'react'
import Box from "../atoms/Box"
import Label from "../atoms/Label"
import Input from "../atoms/Input"

const InputGroup = ( { id, className, value, type, label, style, onChange } ) => {
  return (
    <Box className={className} style={style}>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} 
          className={className} 
          value={value} 
          type={type} 
          placeholder={label} 
        onChange={onChange}></Input>
    </Box>
  )
}

export default InputGroup