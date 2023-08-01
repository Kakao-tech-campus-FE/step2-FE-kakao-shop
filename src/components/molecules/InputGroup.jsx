import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  onBlur,
}) => {
  return (
    <Box className="mt-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default InputGroup;
