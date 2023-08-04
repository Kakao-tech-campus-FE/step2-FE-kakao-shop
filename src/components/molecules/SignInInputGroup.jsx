import Input from "../atoms/Input";
import Label from "../atoms/Label";

const SignInInputGroup = ({
  id,
  className,
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  label,
  placeholder,
  ref,
}) => {
  return (
    <div>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        ref={ref}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default SignInInputGroup;
