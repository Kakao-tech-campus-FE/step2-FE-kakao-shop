import Box from "../atoms/Box"
import Input from "../atoms/Input"
import Label from "../atoms/Label"

const InputGroup = ({className, id, type, value, onChange, placeholder, label}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id} />
      <Input id={id} type={type} value={value} onChange={onChange} label={label} placeholder={placeholder}/>
    </Box>
  )
}

export default InputGroup;