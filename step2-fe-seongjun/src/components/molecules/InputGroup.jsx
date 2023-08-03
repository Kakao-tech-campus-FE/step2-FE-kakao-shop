import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Label from '../atoms/Label';

const InputGroup = ({ // errorMsg: 에러 메세지 출력
  id, 
  name, 
  type, 
  value, 
  onChange, 
  className, 
  placeholder, 
  label,
  onBlur,
  errorMsg
}) => {
  return (
    <Box className = {className}>
      <Label htmlFor={id} className=" px-2">{label}</Label>
      <Input id = {id}
        type={type}
        value = {value} 
        name={name} 
        onChange={onChange} 
        className = {className} 
        placeholder={placeholder}  
        onBlur = {onBlur}
      />
      <div className='errMsg' style={{color: 'red', fontSize: '0.8rem'}}>{errorMsg}</div>
    </Box>
  )
};

export default InputGroup;