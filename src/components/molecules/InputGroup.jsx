import Input from "../atoms/Input"
import Box from "../atoms/Box"
import Label from "../atoms/Label"

//id : input과 label을 바인딩해 줄 값
//name : event.target에서 체크하기 위한 값 
const InputGroup = ({id, name, type, value, onChange, placeholder, label, onBlur }) => {
  return (
    <Box>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
    </Box>
  )
}

export default InputGroup