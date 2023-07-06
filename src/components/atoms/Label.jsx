const Label = ({ htmlFor, children, className }) => (
    <label htmlFor={htmlFor} className={`label ${className}`}>
        {children}
    </label>
);

export default Label;