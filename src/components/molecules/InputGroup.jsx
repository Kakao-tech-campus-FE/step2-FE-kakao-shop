import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import "../../styles/inputGroup.css"

const InputGroup = ({
                        id,         // 해당 요소의 id
                        value,      // 해당 요소의 value
                        label,      // 해당 요소의 label
                        type,       // 해당 input의 input type
                        placeholder,// 해당 input의 placeholder
                        onChange,   // 해당 input의 onChange
                        errorMsg,   // 해당 input의 errorMsg
                        onBlur    // 해당 input의 onBlur
                    }) => {
    return (
        <Box className={`input-group ${id}`}>
            <Container className="input-group-label">
                <div>
                    <Label htmlFor={id} className={id}>
                        {label}
                    </Label>
                </div>
                {<div className={`error-msg ${id}`}>{errorMsg}</div>}
            </Container>
            <div>
                <Input
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        </Box>
    );
}

export default InputGroup;