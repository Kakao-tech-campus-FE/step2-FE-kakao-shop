const Label = ({ children, htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {children}
        </label>
    )
}

export default Label;