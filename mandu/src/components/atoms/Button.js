const Button = ({children, className = "", ...props}) => (

    <button
        className={`bg-amber-300 w-full p-2 rounded-md ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;
