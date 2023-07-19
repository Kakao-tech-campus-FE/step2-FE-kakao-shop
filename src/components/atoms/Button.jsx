import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, className }) => {
  /** children: 버튼 내부에 표시될 내용 */
  return (
    <button
      className={className} /**className: 클래스 이름 */
      onClick={(e) => {
        e.preventDefault();
        onClick(); // onClick이 없으면 빈 함수가 호출됩니다.
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
  onClick: () => {},
  children: null,
  className: "",
};

export default Button;
