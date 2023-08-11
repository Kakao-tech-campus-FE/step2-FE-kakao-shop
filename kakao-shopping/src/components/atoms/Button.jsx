// onClick: 버튼 클릭 이벤트 핸들러 함수
// children: 버튼 내용 텍스트
// className: 추가 클래스명

const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // button은 기본적으로 submit이라는 요청을 보내게됨
        onClick();
      }}
    >

      {children}
    </button>
  );
};

export default Button;
