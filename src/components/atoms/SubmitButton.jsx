/**
 * type이 "submit"인 Button Component
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 클래스 이름
 * @returns {JSX.Element} 컴포넌트 반환
 */

const SubmitButton = ({ children, className = '' }) => {
    return (
        <button
            className={`bg-yellow-300 rounded-lg text-sm min-w-[23rem] p-3 mt-5 mb-2 hover:bg-yellow-400 ${className}`}
            type="submit"
        >
            {children}
        </button>
    );
};

export default SubmitButton;
