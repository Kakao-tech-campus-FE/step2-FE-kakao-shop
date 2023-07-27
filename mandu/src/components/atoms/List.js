export const List = ({children, ...props}) => {
    return (
        <ul className="list-none flex" {...props}>
            {children}
        </ul>
    );
}
