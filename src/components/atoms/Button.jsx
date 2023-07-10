// src/components/atoms/Button.jsx
// Button component
// onClick: 버튼 클릭 이벤트 핸들러 함수
// className: 추가 CSS 클래스 이름
import "../../styles/atoms/Button.css";

const Button = ({ onClick, children, className = "" }) => {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            className={'button ${className}'}
        >
            {children}
        </button>
    );
};

export default Button;
