import { Dna } from "react-loader-spinner";
import PropTypes from "prop-types";

function Loader({ width, height, style }) {
  return (
    <Dna
      visible={true}
      ariaLabel="dna-loading"
      wrapperStyle={{ width, height, ...style }}
      wrapperClass="dna-wrapper"
    />
  );
}

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

Loader.defaultProps = {
  width: "100px",
  height: "100px",
  style: {},
};

export default Loader;
