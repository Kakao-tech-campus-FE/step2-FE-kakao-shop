/**
 * 컨테이너 컴포넌트 생성
 * @param {React.ReactNode} children
 * @param {string} className 
 * @returns 컨테이너 컴포넌트
 */
const Container = ({ children, className="" }) => {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
}

export default Container;