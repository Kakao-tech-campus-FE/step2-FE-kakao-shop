import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

// id : input의 id이자 label의 htmlFor로 사용될 값
// type : input의 type
// value : input의 value
// onChange : input의 change 이벤트 리스너
// onBlur : input의 focus out 이벤트 리스너
// placeholder : input의 placeholder
// label : label의 내용으로 사용될 요소
const InputGroup = ({ id, name, type, value, onChange, onBlur, className, placeholder, label }) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder}/>
        </Box>
    );
}

export default InputGroup;