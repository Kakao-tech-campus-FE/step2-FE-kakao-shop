import PropTypes from 'prop-types';

const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
  
  // RegisterForm에서 inputGroup을 모아놓은 역할