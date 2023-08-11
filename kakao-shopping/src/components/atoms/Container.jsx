// children: 내용 텍스트
// className: 추가 클래스명

import "../../styles/atoms/Container.css";

const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
