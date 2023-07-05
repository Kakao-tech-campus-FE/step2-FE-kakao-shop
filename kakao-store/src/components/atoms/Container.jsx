import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired, // Container 컴포넌트의 자식 요소
  className: PropTypes.string, // CSS 클래스
};

export default Container;
