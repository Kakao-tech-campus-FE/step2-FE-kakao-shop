import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import {useState} from "react";
import Container from "../atoms/Container";
import "../../styles/inputGroup.css"

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

    const checkError = (valueToCheck) => {
        if (valueToCheck.length === 0) {
            return `${label}을(를) 입력해주세요.`;
        } else if (constraint(valueToCheck)) {
            return "";
        } else {
            return error;

        }
    }

    const [errorMsg, setErrorMsg] = useState("")

    // useEffect(() => {
    //         setErrorMsg(checkError(value))
    //     }
    //     , [errorMsg]
    // )


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
                    onBlur={() => {
                        setErrorMsg(checkError(value))
                    }}
                />
            </div>
        </Box>
    );
}

export default InputGroup;