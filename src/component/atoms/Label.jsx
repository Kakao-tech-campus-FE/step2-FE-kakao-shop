const Label = ({htmlFor,className , children}) => 
{
    return (
        <Label
        htmlFor={htmlFor}
        className={className}>
            {children}
        </Label>
    )
}

export default Label