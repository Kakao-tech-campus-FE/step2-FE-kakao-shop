const Button = ({children, onClick}) => (
    <button onClick={(e) => {
        e.preventDefault();
        onClick();
    }}>
        {children}
    </button>);

export default Button;