/**
 * 컨테이너 컴포넌트 생성
 * @param {React.ReactNode} children
 * @param {string} className 
 * @returns 컨테이너 컴포넌트 생성
 */

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default Container;