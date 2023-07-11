import Box from "../atoms/Box.js";
import Label from "../atoms/Label.js";
import Input from "../atoms/Input.js";

// props: type, name, onChange, placeholder, value
export default function LabeledInput({ id, label, ...props }) {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </Box>
  );
}
