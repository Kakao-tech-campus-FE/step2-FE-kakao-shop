import './../../styles/atoms/Box.css'
// Box 컴포넌트
// props : children :내용, className : style 적용을 위한 prop
const Box = ({ children, className }) => {
    return (
        <div className={`box ${className}`}> {children} </div>
    );
};

export default Box;