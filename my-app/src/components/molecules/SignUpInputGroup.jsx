import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const SignUpInputGroup = ({
  id,
  className,
  type,
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default SignUpInputGroup;
