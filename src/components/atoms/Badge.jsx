
const Badge = ({ children }) => {
    return (
        <span 
            className={`badge bg-[#616A72] text-white text-xs font-medium mr-2 px-1.5 py-1 rounded-[6px] dark:bg-gray-700 dark:text-gray-300`}
        >
            {children}
        </span>
    );
}

export default Badge;
