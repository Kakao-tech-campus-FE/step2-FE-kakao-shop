import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const SignInInputGroup = ({
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
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Label htmlFor={id}>{label}</Label>
    </Box>
  );
};

export default SignInInputGroup;
