import React from "react";
import PropTypes from "prop-types";

function Close({ size }) {
  return (
    <img
      width={size}
      height={size}
      src="https://img.icons8.com/material-two-tone/36/000000/delete-sign.png"
      alt="delete-sign"
    />
  );
}

Close.propTypes = { size: PropTypes.number };
Close.defaultProps = { size: 12 };

export default React.memo(Close);
