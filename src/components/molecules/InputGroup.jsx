import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
}) => {
  return (
    <Box className={className}>
      <div>
        <Label htmlFor={id}>{label}</Label>
      </div>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative w-full min-h-12 py-2 px-0 border-0 text-base leading-6 text-gray-900 bg-transparent tracking-normal box-border outline-none caret-black opacity-100"
      />
    </Box>
  );
};

export default InputGroup;
