import PropTypes from "prop-types";

const Errorbox = ({ errors }) => {
  return (
    <div className="box mb-4 rounded-md  bg-white p-1">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  );
};

Errorbox.propTypes = {
  error: PropTypes.string.isRequired, // Errorbox 컴포넌트의 자식 요소
};

export default Errorbox;
