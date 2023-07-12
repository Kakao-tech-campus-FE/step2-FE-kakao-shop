import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

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
    <Box className="mb-4">
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
        className={className}
      />
    </Box>
  );
};

export default InputGroup;
