import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Group from "../atoms/Group";

const InputGroup = ({
  id,
  children,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <Group>
        <Label htmlFor={id}>{children}</Label>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Group>
    </>
  );
};

export default InputGroup;
