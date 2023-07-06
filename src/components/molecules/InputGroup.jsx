import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Group from "../atoms/Group";
import ErrorMsg from "../atoms/ErrorMsg";

const InputGroup = ({
  id,
  children,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  const label = children[0];
  const errorMsg = children[1];
  return (
    <>
      <Group>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </Group>
    </>
  );
};

export default InputGroup;
