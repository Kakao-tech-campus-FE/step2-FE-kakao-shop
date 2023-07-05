const InputField = ({id, label, type, placeholder, value, onChange, error}) => {

    return (
        <div>
            {label && <label className="my-0.5 block" htmlFor={id}>{label}</label>}
            <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full border-2 p-2 rounded "
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;