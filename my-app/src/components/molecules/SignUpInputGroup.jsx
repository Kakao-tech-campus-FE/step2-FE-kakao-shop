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
    <div className="flex flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default SignUpInputGroup;
