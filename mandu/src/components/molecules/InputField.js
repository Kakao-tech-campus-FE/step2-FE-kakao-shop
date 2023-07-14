import Input from "../atoms/Input";

const InputField = ({id, label, type, placeholder, value, onChange, error, name, className, children}) => {
    return (
        <div className={className}>
            {label && <label className="my-0.5 block" htmlFor={id}>{label}</label>}
            <div className="flex w-full items-center space-x-2">
                <Input
                    name={name}
                    id={id}
                    type={type}
                    placeholder={placeholder}
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
