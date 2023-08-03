const Button = ({onClick, children}) => {
    return (
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md bg-yellow-300 hover:bg-yellow-400"
        onClick={(e) => {
        e.preventDefault();
        onClick();
    }}
    >
        {children}
        </button>
    );
};
export default Button;