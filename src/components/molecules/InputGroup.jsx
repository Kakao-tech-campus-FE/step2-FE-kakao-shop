import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Label from '../atoms/Label';

const InputGroup = ({ onBlur, id, value, label, placeholder, className, onChange, type, name }) => {
  return (

    <Box  className={className}>
      <Label htlmFor = {id}>{label}</Label>
      <Input id ={id} value={value} placeholder={placeholder} onChange={onChange} 
      onBlur={onBlur} type={type} name={name} >
        {/* // input 컴포넌트에서 이미 지정해놓은 걸 왜 또 지정해주는지 ??  input className은 왜 빼는건지  */}
      </Input>
    </Box>
  )
}

export default InputGroup;