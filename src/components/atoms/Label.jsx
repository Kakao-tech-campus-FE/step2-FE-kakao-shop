// src/components/atoms/Label.jsx
// Label component
// htmlFor: 라벨과 연결된 입력 필드의 ID
// children: 라벨에 표시될 내용
// className: 추가 CSS 클래스 이름
const Label = ({ htmlFor, children, className}) => {
    return (
        <label htmlFor={htmlFor} className={className} >
            {children}
        </label>
    );
};

export default Label;