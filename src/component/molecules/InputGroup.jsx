import Input from "../atoms/Input"
import Box from "../atoms/Box";
import Label from "../atoms/Label";
import '../../styles/InputGroup.css';
const InputGroup =({id, type, value, onChange, className, 
    label, name, placeholder})=>{
        return(
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
             <Input id={id} type={type} value={value} onChange={onChange} name={name} placeholder={placeholder}/>
        </Box>
        );
    };

export default InputGroup;