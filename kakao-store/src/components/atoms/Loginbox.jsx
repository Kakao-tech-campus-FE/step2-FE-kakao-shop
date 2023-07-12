import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const Loginbox = ({ email, password, onClick }) => {
  return (
    <div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

Loginbox.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onClick: PropTypes.func,
};

export default Loginbox;
