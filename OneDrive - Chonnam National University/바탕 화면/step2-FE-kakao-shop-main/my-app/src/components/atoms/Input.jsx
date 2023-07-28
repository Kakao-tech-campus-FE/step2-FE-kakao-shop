import PropTypes from 'prop-types';

const Input = ({ type, value, name, onChange, placeholder, className, id }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Input;