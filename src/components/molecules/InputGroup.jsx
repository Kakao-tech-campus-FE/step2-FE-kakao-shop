import Input from "../atoms/Input";
import Box from "../atoms/Button";
import Label from "../atoms/Label";

const InputGroup = ({
                        id,
                        name,
                        type, value,
                        onChange,
                        className,
                        label,
                        placeholder
                    }) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange} className={className} placehoder={placeholder}/>
        </Box>
    );
}
export default class InputGroup {
}