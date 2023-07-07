const Input = ({type, value, onChange, placeholder, className, id, name}) => {
	return (
		<input 
			id={id} 
			className={`w-full outline-none ${className}`} 
			type={type} 
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}>
		</input>
	);
};

export default Input;