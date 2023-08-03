import Input from "../atoms/Input"
import Label from "../atoms/Label"

const InputGroup = ({
  boxClassName,  // Box 컴포넌트의 Tailwind CSS 사용 위한 class
  inputClassName,// Input 컴포넌트의 class
  id,         // id
  type,       // input type
  value,      // input 값
  onChange,   // input onChange 메소드
  placeholder,// input placeholder
  autocomplete// 자동완성
}) => {
  return (
    <div className={boxClassName}>
      <Label htmlFor={id} />
      <Input className={inputClassName} id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} autocomplete={autocomplete}/>
    </div>
  )
}

export default InputGroup;