import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({id, name, type, value, onChange, className, label, placeholder}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </Box>
  );
};

export default InputGroup;