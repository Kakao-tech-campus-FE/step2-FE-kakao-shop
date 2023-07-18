import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className }) => {
  /** children: 버튼 내부에 표시될 내용 */
  return (
    <button
      className={className} /**className: 클래스 이름 */
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick(); /**onClick: 버튼을 클릭했을 때 실행될 콜백 함수 */
        }
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  children: null,
  className: "",
};

export default Button;
