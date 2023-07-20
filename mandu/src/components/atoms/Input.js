const Input = ({style, className = "", ...props}) => {

    let InputStyle = "border-2 p-2 flex-grow";
    switch (style) {
        case "round":
            InputStyle = "border-2 p-2 rounded flex-grow";
            break;
    }

    return (
        <input
            className={InputStyle + " " + className}
            {...props}
        />
    );
}
export default Input;
