import Label from "../atoms/Label";
import Input from "../atoms/Input";

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
  <>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        /></>
  );
};

export default InputGroup;