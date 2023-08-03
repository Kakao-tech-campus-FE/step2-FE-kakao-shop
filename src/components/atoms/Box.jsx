/**
 * 
 * @param {*} className 추가 CSS 클래스 이름
 * @returns Box Component
 */
const Box = ({ children, className = ""}) => {
    return (
        <div className={`box ${className}`}>
        {children}
        </div>
    );
};

export default Box;