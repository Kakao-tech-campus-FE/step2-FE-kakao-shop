import Input from "../atoms/Input";
import Label from "../atoms/Label";
import styled from "styled-components";

const InputGroup = ({
  onBlur,
  id,
  value,
  label,
  placeholder,
  className,
  onChange,
  type,
  name,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        className={className}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        name={name}
      />
    </div>
  );
};

export default InputGroup;
