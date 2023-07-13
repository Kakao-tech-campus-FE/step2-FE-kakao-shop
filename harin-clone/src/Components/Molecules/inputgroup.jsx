import Input from "../Atoms/Input";
import Box from "../Atoms/Box";
import Label from "../Atoms/Label";

const InputGroup = ({ id, type, value, onChange, className, label, placeholder, name}) => {
  // const valid = {valid}
  
  return (
    <> 
      <Label htmlFor={id} children={label} className="text-stone-500" />
      <Box className={className}>
        <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} className="w-full" />
      </Box>
    </>
  );
};

export default InputGroup;