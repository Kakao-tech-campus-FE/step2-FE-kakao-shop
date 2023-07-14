import Container from '../atoms/Container';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Message from '../atoms/Message';

const LabelInput = ({ id, type, value, onChange, label, placeholder, required, errorMessage }) => {
    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                onChange={onChange}
                name={id}
                value={value}
                placeholder={placeholder}
                required={required}
            />
            {errorMessage && <Message className="error">{errorMessage}</Message>}
        </Container>
    );
};

export default LabelInput;
