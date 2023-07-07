const InputField = ({id, label, type, placeholder, value, onChange, error, name, className, children}) => {


    return (
        <div className={className}>
            {label && <label className="my-0.5 block" htmlFor={id}>{label}</label>}
            <div className="flex w-full items-center space-x-2">
                <input
                    name={name}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className="border-2 p-2 rounded flex-grow"
                    value={value}
                    onChange={onChange}
                />
                {children}
            </div>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;