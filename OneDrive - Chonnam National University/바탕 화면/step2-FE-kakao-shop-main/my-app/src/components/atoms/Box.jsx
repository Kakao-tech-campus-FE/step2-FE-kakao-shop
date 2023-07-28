import PropTypes from 'prop-types';

const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Box;
  
  // InputGroup에서 label과 input 연결해주는 역할