const Input = ({style, ...props}) => {

    let className = "border-2 p-2flex-grow";
    switch (style) {
        case "round":
            className = "border-2 p-2 rounded flex-grow";
            break;
    }

    return (
        <input
            name={props.name}
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            className={className}
            value={props.value}
            onChange={props.onChange}
        />
    );
}
export default Input;