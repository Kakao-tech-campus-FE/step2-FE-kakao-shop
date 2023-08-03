/**
 * 페이지 Heading 컴포넌트
 * @param {ReactNode} children - 하위 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Title = ({ children }) => {
    return <h1 className="text-xl font-bold mb-10">{children}</h1>;
};

export default Title;
