// src/components/atoms/Box.jsx
// Box component
// className: 추가 CSS 클래스 이름
import "../../styles/atoms/Box.css";

const Box = ({ children, className = ""}) => {
    return <div className={'box ${className}'}>{children}</div>;
};

export default Box;