/* onClick: 버튼 클릭 시 실행 할 함수, children: 자식요소, 주로 버튼의 이름(회원가입, 로그인)*/
const Button = ({onClick, children}) => {
  return (
    <button // button은 기본적으로 submit 이라는 요청을 보내게 됨(페이지가 리렌더링되게 됨), 그래서 onClick으로 관리
      onClick={(e) => {
        e.preventDefault(); // submit 발생하지 않도록 막아줌
        onClick(e);
      }}> 
      {children}
    </button>
  );
};

export default Button;