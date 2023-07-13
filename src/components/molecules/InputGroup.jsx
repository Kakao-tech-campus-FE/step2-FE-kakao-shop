import Input from '../atoms/Input'
import Box from '../atoms/Box'
import Label from '../atoms/Label'
import Containor from '../atoms/Containor'

function InputGroup({
  id,
  type,
  value,
  onChange,
  placeholder,
  label,
  name,
  style,
  labelStyle
}) {
  return (
    <Containor style={{padding: '0px'}}>
      <Label htmlFor={id} style={labelStyle}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} style={style}/>
    </Containor>
  )
}

export default InputGroup