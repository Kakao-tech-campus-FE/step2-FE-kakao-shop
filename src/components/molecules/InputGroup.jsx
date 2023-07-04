import Box from '../atoms/Box';
import Label from '../atoms/Label';
import Input from '../atoms/input';

const InputGroup = ({ id, type, value, onChange, className, placeholder }) => {
  return (
    <Box className={className}>
      <Label htmlFor={id} />
      <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </Box>
  );
};

export default InputGroup;
