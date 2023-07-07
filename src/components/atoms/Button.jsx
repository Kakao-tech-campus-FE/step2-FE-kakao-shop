const Button = ({onClick, children, className}) => { //children: 버튼 내부에 표시될 내용
  return (
    <button
      className={className} //className: 클래스 이름
      onClick={(e) => {
        e.preventDefault();
        onClick(); //onClick: 버튼을 클릭했을 때 실행될 콜백 함수
      }}
    >
      {children}
    </button>
  );
};

export default Button;