import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({id, type, value, onChange, className, placeholder, label, name}) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name}></Input>
        </Box>
    );
}

export default InputGroup;