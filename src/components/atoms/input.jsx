const Input = ({ className, children, ...props }) => {
    return (
        <>
            <input className={`myStyle ${className}`} {...props}>
                {children}
            </input>
        </>
    );
};

export default Input;