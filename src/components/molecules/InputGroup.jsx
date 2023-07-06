import Input from '../atoms/Input'
import Box from '../atoms/Box'
import Label from '../atoms/Label'

function InputGroup({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
  name
}) {
  return (
   <Box>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name}/>
   </Box>
  )
}

export default InputGroup