import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Box from "../atoms/Box";
import LoginForm from "../organisms/LoginForm";
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
        <LoginForm>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange} className={className} placehoder={placeholder}/>
        </LoginForm>
    );
}
export default InputGroup;