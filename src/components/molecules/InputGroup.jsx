import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
<<<<<<< HEAD
  placeholder,
  label,
=======
  className,
  label,
  placeholder,
>>>>>>> 003f6137052531724667909b8aee43a2ed641ab1
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
<<<<<<< HEAD
        placeholder={placeholder}
        onChange={onChange}
=======
        onChange={onChange}
        placeholder={placeholder}
>>>>>>> 003f6137052531724667909b8aee43a2ed641ab1
        onBlur={onBlur}
      />
    </Box>
  );
};

export default InputGroup;
