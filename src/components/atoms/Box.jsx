import '../../styles/atoms/Box.css';

/* children: 감쌀 자식 요소, className: box가 담을 클래스(username, password..);*/ 
const Box = ({children, className=""}) => {
  return <div className={`box ${className}`}>{children}</div>;
}

export default Box;