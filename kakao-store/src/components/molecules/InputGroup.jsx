import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({id, type, value, onChange, className, placeholder, label}) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder}></Input>
        </Box>
    );
}

export default InputGroup;