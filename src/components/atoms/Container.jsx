import "../../styles/atoms/Container.css";

const Container = ({ children, className = "" }) => {
  /**children: 컨테이너 내부에 포함될 내용, className: 클래스 이름 */
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
