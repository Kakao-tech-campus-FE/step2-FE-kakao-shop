import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({ id, type, value, onChange, name, className, label, placeholder }) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} value={value} name={name} onChange={onChange} placeholder={placeholder}></Input>
        </Box>
    );
};

export default InputGroup;
