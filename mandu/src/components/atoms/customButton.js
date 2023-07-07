const Button = ({children, ...props}) => (

    <button
        className="bg-amber-300 w-full mt-8 p-2 rounded-md"
        {...props}
    >
        {children}
    </button>
);

export default Button;