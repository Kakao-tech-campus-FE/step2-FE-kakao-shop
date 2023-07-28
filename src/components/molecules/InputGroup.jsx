/*eslint-disable react/prop-types */

//form of input and label in box component, recieve various parameters.

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
      <Label className="block h-5" htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border w-full"
      />
    </Box>
  );
};

export default InputGroup;
