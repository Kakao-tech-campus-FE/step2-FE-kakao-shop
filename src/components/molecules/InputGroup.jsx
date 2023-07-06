import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

const InputGroup = ({
                        id,
                        value,
                        label,
                        type,
                        placeholder,
                        onChange,
                        error = "",
                        constraint = () => true,
                    }) => {
    return (
        <Box className={`input-group ${id}`}>
            <div>
                <Label htmlFor={id}>
                    {label}
                </Label>
            </div>
            {!constraint(value) && <span className="error">{error}</span>}
            <div>
                <Input
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </Box>
    );
}

export default InputGroup;