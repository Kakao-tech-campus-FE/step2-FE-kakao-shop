import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import {useState} from "react";
import Container from "../atoms/Container";
import "../../styles/inputGroup.css"

const error = {
    errorMessage: {
        required: "빈칸을 채워주세요.",
        invalid: "형식이 올바르지 않습니다.",
    },
    constraint: RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/),
    checkError: (value) => {
        if (value.length === 0) {
            return error.errorMessage.required;
        } else if (error.constraint.test(value)) {
            return "";
        } else {
            return error.errorMessage.invalid;
        }
    }
}

const InputGroup = ({
                        id,         // 해당 요소의 id
                        value,      // 해당 요소의 value
                        label,      // 해당 요소의 label
                        type,       // 해당 input의 input type
                        placeholder,// 해당 input의 placeholder
                        onChange,   // 해당 input의 onChange
                        error = "", // 해당 input의 error message
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