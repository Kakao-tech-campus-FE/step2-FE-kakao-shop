import Box from "../atoms/Box"
import Input from "../atoms/Input"
import Label from "../atoms/Label"

const InputGroup = ({id, type, value, onChange, placeholder, label}) => {
  return (
    <Box>
      <Label htmlFor={id} />
      <Input id={id} type={type} value={value} onChange={onChange} label={label} placeholder={placeholder}/>
    </Box>
  )
}

export default InputGroup;