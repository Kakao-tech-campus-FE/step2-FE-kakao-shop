import Input from "../atoms/Input";
import Container from "../atoms/Container";
import Label from "../atoms/Label";

const InputGroup = ({
    id, // Label의 id
    label, // Label의 내용
    name, // Input의 name
    type, // Input의 type
    value, // Input의 value
    valid, // 올바른지 여부 (설명 메시지 색 설정)
    description, // 설명 메세지
    placeholder, // Input의 placeholder
    onChange, // Input의 onChange handler
    className, // Box의 class
}) => {
    return (
        <Container className={`m-1 ${className}`}>
            <Label className="d-block fw-bold" htmlFor={id}>
                {label}
            </Label>
            <Input
                className="w-100 p-0 border-bottom border-top-0 border-start-0 border-end-0"
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <Label
                className={`username-description pt-1 d-block text-${
                    valid ? "success" : "danger"
                } w-100 fs-7`}
            >
                {description ? `${description}` : <br />}
            </Label>
        </Container>
    );
};

export default InputGroup;
