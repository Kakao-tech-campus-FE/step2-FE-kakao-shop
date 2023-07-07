// components
import Box from "../atoms/Box.js";
import Label from "../atoms/Label.js";
import Input from "../atoms/Input.js";

export default function LabeledInput({
  type,
  id,
  name,
  onChange,
  label,
  placeholder,
  value,
}) {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </Box>
  );
}
