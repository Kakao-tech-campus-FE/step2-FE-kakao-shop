import Input from "../../components/atoms/Input";
import Box from "../../components/atoms/Box";
import Label from "../../components/atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className, // undefined className 에러는 molecule Level에서 안잡고 atom level에서 잡는게 낫다
  label,
  placeholder,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default InputGroup;
