//Button
// Props : onClick, children
// onClick : 기본내장되어있는 업데이트를 막도록 설정
// children : 무슨버튼인지
const Button = ({ onClick, children }) => {
    return (
        <button onClick={(e) => {
            e.preventDefault();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default Button;