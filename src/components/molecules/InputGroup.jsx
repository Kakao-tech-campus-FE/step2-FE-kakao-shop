import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputGroup = ({ id, label, ...props }) => {
  return (
    <Box className="mb-4">
      <Label htmlFor={id}>
        {label}
        <br />
      </Label>
      <Input id={id} {...props} />
    </Box>
  );
};

export default InputGroup;
