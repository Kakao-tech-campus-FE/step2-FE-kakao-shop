import Box from "../atoms/Box";
import * as InputBox from '../../styles/molecules/InputGroup';
import ErrorMsg from "../atoms/ErrorMsg";

const InputGroup = ({
    id, 
    name, 
    type, 
    value, 
    onChange, 
    className, 
    label, 
    placeholder,
    onBlur,
    invalid,}) => {
    return(
        <Box className={className}>
            <InputBox.Label htmlFor={id}>{label}</InputBox.Label>
            <InputBox.Input 
            id={id} 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            onBlur={onBlur}/>
            <ErrorMsg errorMsg={invalid} name={name} />
        </Box>
    );
};

export default InputGroup;