/**
 * 
 * @param {Object} props - 라벨 컴포넌트의 속성들
 * @param {string} props.htmlFor - 라벨과 연결된 입력 필드의 ID
 * @param {React.ReactNode} props.children - 라벨에 표시될 내용
 * @param {string} [props.className=""] - 추가 CSS 클래스 이름
 * 
 * @returns {JSX.Element} - Label Component
 */

const Label = ({ htmlFor, children, className }) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {children}
        </label>
    );
};

export default Label;
