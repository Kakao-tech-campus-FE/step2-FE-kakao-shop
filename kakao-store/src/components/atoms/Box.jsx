import PropTypes from "prop-types";

const Box = ({ children, className = "" }) => {
  return (
    <div
      className={`box mb-4 rounded-md border border-gray-300 bg-white p-4 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

Box.prototypes = {
  children: PropTypes.node.isRequired, // Box 컴포넌트의 자식 요소
  className: PropTypes.string, // CSS 클래스
};

export default Box;
