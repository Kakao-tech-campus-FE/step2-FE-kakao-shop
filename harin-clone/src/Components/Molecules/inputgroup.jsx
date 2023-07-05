import Input from "../Atoms/input"
import Box from "../Atoms/box"
import Label from "../Atoms/label"

const InputGroup = ({ id, type, value, onChange, className, label, placeholder}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id} />
      <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </Box>
  )
};

export default InputGroup;