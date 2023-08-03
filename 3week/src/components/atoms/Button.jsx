const Button = ({ onClick, children }) => {
  // onClick 클릭 이벤트 핸들러 함수
  // children 버튼 내부에 표시할 내용
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        // 리렌더링 방지
        onClick();
        // 주의! 기본적으로 sumit 요청 보내게 됨. 이 과정에서 페이지가 리렌더링하게 되는 상황이 생기니 onClick 메소드로 관리
      }}
    >
      {children}
    </button>
  );
};

export default Button;
