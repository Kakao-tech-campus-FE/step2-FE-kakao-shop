import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Input from "../atoms/input";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  label,
  error,
  onBlur,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>
        {label}
        <br />
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default InputGroup;
