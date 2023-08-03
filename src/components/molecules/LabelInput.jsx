import Container from '../atoms/Container';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Text from '../atoms/Text';

const LabelInput = ({ id, type, value, onChange, label, placeholder, required, errorMessage }) => {
    return (
        <Container direction="column" align="flex-start">
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
            {errorMessage && <Text className="error">{errorMessage}</Text>}
        </Container>
    );
};

export default LabelInput;
