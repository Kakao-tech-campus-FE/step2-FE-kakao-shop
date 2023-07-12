import PropTypes from "prop-types";

const Label = ({ children, htmlfor, className }) => {
  return (
    <label htmlfor={htmlfor} className={`font-semibold ${className}`}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired, // Label 컴포넌트의 자식 요소
  htmlfor: PropTypes.string, // label 요소의 for 속성
  className: PropTypes.string, // CSS 클래스
};

export default Label;
