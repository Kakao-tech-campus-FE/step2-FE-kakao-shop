/**
 * 박스 컴포넌트 생성
 * @param {React.ReactNode} children
 * @param {string} className 
 * @returns 박스 컴포넌트 
 */
const Box = ({ children, className="" }) => {
    return (
        <div className={`box ${className}`}>
            {children}
        </div>
    );
}

export default Box;