import Input from "../Atoms/input";
import Box from "../Atoms/box";
import Label from "../Atoms/label";

const InputGroup = ({ id, type, value, onChange, className, label, placeholder, name}) => {
  return (
    <> 
      <Label htmlFor={id} children={label} className="font-slate-400" />
      <Box className={className}>
        <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} className="w-full" />
      </Box>
    </>
  );
};

export default InputGroup;