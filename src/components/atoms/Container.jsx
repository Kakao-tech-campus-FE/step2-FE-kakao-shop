// src/components/atoms/Container.jsx
// Container component
// className: 추가 CSS 클래스 이름
import "../../styles/atoms/Container.css"

const Container = ({children, className = ""}) => {
    return <div className={'container ${className}'}>{children}</div>;
};

export default Container;