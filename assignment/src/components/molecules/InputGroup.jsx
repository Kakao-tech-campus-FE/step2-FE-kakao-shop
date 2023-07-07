import Input from '../atoms/Input'
import Box from '../atoms/Box'
import Label from '../atoms/Label'

const InputGroup = ({ id, type, value, name, onChange, className, label, placeholder, message }) => {
    return (
        <Box className={className}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} message = {message} />
        </Box>
    )
}

export default InputGroup;