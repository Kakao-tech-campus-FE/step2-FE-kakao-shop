import Box from "../atoms/Box.js";
import Label from "../atoms/Label.js";
import Input from "../atoms/Input.js";

export default function LabeledInput({
  type,
  id,
  onChange,
  label,
  placeholder,
}) {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
}
