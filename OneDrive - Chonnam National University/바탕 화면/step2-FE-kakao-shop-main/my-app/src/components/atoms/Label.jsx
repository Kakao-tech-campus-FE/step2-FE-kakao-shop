// htmlFor = id느낌, children = 안에 들어갈 내용, className = 클래스 이름
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Label;