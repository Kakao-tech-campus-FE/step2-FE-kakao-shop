// children: 내용 텍스트
// className: 추가 클래스명

const Title = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export default Title;
