import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box"

const InputGroup = ({
  id,
  children,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  const label = children;
  return (
    <Box>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}/>
    </Box>
  );
};

export default InputGroup;