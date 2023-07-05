import Box from '../atoms/Box';
import Label from '../atoms/Label';
import Input from '../atoms/input';

const InputGroup = ({ id, name, type, value, onChange, placeholder, className, label }) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default InputGroup;
