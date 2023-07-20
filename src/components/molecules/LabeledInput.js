import Box from "components/atoms/Box.js";
import Label from "components/atoms/Label.js";
import Input from "components/atoms/Input.js";

// props: type, name, onChange, placeholder, value
export default function LabeledInput({ id, label, ...props }) {
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </Box>
  );
}
