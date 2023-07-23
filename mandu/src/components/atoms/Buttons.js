export const ElevatedButton = ({children, className = "", ...props}) => (

    <button
        className={`w-full p-2 rounded-md ${className}`}
        {...props}
    >
        {children}
    </button>
);

export const OutlinedButton = ({children, className = "", ...props}) => (
    <button
        className={`w-full p-2 rounded-md border-2 ${className}`}
        {...props}
    >
        {children}
    </button>
);

