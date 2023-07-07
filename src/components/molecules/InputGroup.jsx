import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label"
import AlertMessage from "../atoms/AlertMessage";


const InputGroup = ({ id, name, type, value, onChange, label, placeholder, para, doublecheck }) => {

    return (
        <Box>
            <Label htmlFor={id} child={label}></Label>
            <Input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
            <AlertMessage para={para}></AlertMessage>


        </Box>
    )
}
export default InputGroup;