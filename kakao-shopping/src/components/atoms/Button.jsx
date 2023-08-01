// onClick: 버튼 클릭 이벤트 핸들러 함수
// children: 버튼 내용 텍스트
// className: 추가 클래스명

const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
