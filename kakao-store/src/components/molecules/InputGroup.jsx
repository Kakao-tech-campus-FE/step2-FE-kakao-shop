import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

/**
 * 입력 그룹 컴포넌트 생성
 * @param {string} id
 * @param {string} type - <Input /> type
 * @param {*} value
 * @param {function} onChange - 변화 핸들러 함수
 * @param {string} className
 * @param {string} placeholder
 * @param {string} label - label name
 * @param {string} name - Input name
 * @returns 입력 그룹 컴포넌트
 */
const InputGroup = ({id, type, value, onChange, className, placeholder, label, name}) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} name={name}></Input>
        </Box>
    );
}

export default InputGroup;