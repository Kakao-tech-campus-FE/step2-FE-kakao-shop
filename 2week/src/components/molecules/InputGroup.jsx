import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({ id, type, name, value, onChange, className }) => {
	return (
		<Box className={className}>
			<Label htmlFor={id} />
			<Input id={id} type={type} name={name} value={value} onChange={onChange} />
		</Box>
	);
};

export default InputGroup;