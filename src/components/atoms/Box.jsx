// children : box에 삽입할 요소
const Box = ({ children, className="" }) => {
    return (
        <div className={`box ${className}`}>{children}</div>
    );
}

export default Box;