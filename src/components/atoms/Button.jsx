const Button = ({onClick, children, className="button"}) => {
    return(
        <button onClick={(e) => {
            e.preventDefault();
            onClick()
        }}
        className={className}>
            {children}
        </button>
    );
};

export default Button;