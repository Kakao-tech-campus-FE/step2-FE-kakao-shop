import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  label,
}) => {
  return (
    <Box className={`box ${className}`}>
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
