import Box from "../atoms/Box"
import Input from "../atoms/Input"
import Label from "../atoms/Label"

const InputGroup = ({
  className,  // Box 컴포넌트의 Tailwind CSS 사용 위한 class
  id,         // id
  type,       // input type
  value,      // input 값
  onChange,   // input onChange 메소드
  placeholder,// input placeholder
  autocomplete// 자동완성
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id} />
      <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} autocomplete={autocomplete}/>
    </Box>
  )
}

export default InputGroup;