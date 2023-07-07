import '../../styles/atoms/Container.css'
/* children: 감쌀 자식 요소, className: css 클래스 */ 
const Container = ({children, className=""}) => {
  return <div className= {`container ${className}`}>{children}</div>;
}

export default Container;