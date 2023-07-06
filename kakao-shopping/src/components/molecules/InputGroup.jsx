import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
    id, // Label의 id
    label, // Label의 내용
    name, // Input의 name
    type, // Input의 type
    value, // Input의 value
    placeholder, // Input의 placeholder
    onChange, // Input의 onChange handler
    className, // Box의 class
}) => {
    return (
        <Box className={`border-0 ${className}`}>
            <Label className="d-block" htmlFor={id}>
                {label}
            </Label>
            <Input
                className="w-100 rounded p-1"
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Box>
    );
};

export default InputGroup;
