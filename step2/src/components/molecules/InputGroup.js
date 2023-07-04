import Box from '../atoms/Box'
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const InputGroup = ({ id, type, name, className, placeholder, label, value, onChange }) => {
  return (
    <Box className="box_tf">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default InputGroup;